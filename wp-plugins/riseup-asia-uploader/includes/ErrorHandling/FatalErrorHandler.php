<?php
/**
 * FatalErrorHandler — Detects fatal Php errors during Rest requests and emits structured Json.
 *
 * Registers a shutdown function to catch fatal errors and return proper Json
 * error responses instead of blank pages or HTML error output.
 *
 * @package RiseupAsia\ErrorHandling
 * @since   1.57.0
 */

namespace RiseupAsia\ErrorHandling;

if (defined('ABSPATH') === false) {
    exit;
}

use RiseupAsia\Enums\ContentTypeValueType;
use RiseupAsia\Enums\HttpHeaderType;
use RiseupAsia\Enums\HttpStatusType;
use RiseupAsia\Enums\PathLogFileType;
use RiseupAsia\Enums\PluginConfigType;
use RiseupAsia\Enums\ResponseKeyType;
use RiseupAsia\Helpers\DateHelper;
use RiseupAsia\Helpers\PathHelper;

/**
 * Detects fatal Php errors during Rest requests and emits structured Json responses.
 *
 * @since 1.57.0
 */
class FatalErrorHandler
{
    private const FATAL_TYPES = [
        E_ERROR,
        E_PARSE,
        E_CORE_ERROR,
        E_COMPILE_ERROR,
        E_USER_ERROR,
    ];
    private const WP_JSON_PATH = 'wp-json';
    private const ERROR_CODE_FATAL = 'FATAL_ERROR';
    private const ERROR_CODE_ENCODING_FAILED = 'FATAL_ERROR_ENCODING_FAILED';
    private const MESSAGE_TRUNCATE_LENGTH = 500;
    private const MESSAGE_FATAL_ERROR = 'A fatal error occurred in the plugin: ';
    private const MESSAGE_ENCODING_FAILED = 'Fatal error occurred and Json encoding also failed';
    private const ERROR_TYPE_UNKNOWN = 'UNKNOWN_ERROR_TYPE';
    private const PHP_SAPI_CLI = 'cli';
    private const PHP_SAPI_CLI_SERVER = 'cli-server';

    private const ERROR_TYPE_MAP = [
        E_ERROR             => 'E_ERROR',
        E_PARSE             => 'E_PARSE',
        E_CORE_ERROR        => 'E_CORE_ERROR',
        E_COMPILE_ERROR     => 'E_COMPILE_ERROR',
        E_WARNING           => 'E_WARNING',
        E_NOTICE            => 'E_NOTICE',
        E_STRICT            => 'E_STRICT',
        E_DEPRECATED        => 'E_DEPRECATED',
        E_USER_ERROR        => 'E_USER_ERROR',
        E_USER_WARNING      => 'E_USER_WARNING',
        E_USER_NOTICE       => 'E_USER_NOTICE',
        E_USER_DEPRECATED   => 'E_USER_DEPRECATED',
        E_RECOVERABLE_ERROR => 'E_RECOVERABLE_ERROR',
    ];

    public static function handle(): void {
        $error = error_get_last();

        $isFatalRestError = self::isFatalRestError($error);

        if ($isFatalRestError === false) {
            return;
        }

        self::logToFile($error);
        self::cleanOutputBuffers();
        self::emitJsonResponse($error);
    }

    public static function isFatalRestError(?array $error): bool {
        if ($error === null) {
            return false;
        }

        $isFatalType = in_array($error['type'], self::FATAL_TYPES, true);

        if ($isFatalType === false) {
            return false;
        }

        // Guard: CLI context has no REQUEST_URI — skip REST detection
        $isCli = (PHP_SAPI === self::PHP_SAPI_CLI || PHP_SAPI === self::PHP_SAPI_CLI_SERVER);

        if ($isCli) {
            return false;
        }

        $requestUri = $_SERVER['REQUEST_URI'] ?? '';
        $hasPluginSlug = str_contains($requestUri, PluginConfigType::Slug->value);
        $hasWpJsonPath = str_contains($requestUri, self::WP_JSON_PATH);
        $isPluginRequest =
            $hasPluginSlug ||
            $hasWpJsonPath;

        return $isPluginRequest;
    }

    public static function errorTypeToString(int $type): string {
        return self::ERROR_TYPE_MAP[$type] ?? self::ERROR_TYPE_UNKNOWN;
    }

    private static function buildResponse(
        array $error,
        array $traceLines,
        array $frames,
    ): array {
        return [
            ResponseKeyType::Success->value => false,
            ResponseKeyType::Error->value   => [
                'code'    => self::ERROR_CODE_FATAL,
                'message' => self::MESSAGE_FATAL_ERROR . $error['message'],
                'details' => FrameBuilder::buildFatalDetails($error, $traceLines, $frames),
            ],
        ];
    }

    private static function logToFile(array $error): void {
        $logEntry = sprintf(
            "[%s] FATAL ERROR in %s:%d - %s (type: %s)\n",
            DateHelper::nowDatetime(),
            $error['file'],
            $error['line'],
            $error['message'],
            self::errorTypeToString($error['type']),
        );

        $logFile = PathHelper::getLogsDir() . PathLogFileType::FatalError->value;

        @file_put_contents(
            $logFile,
            $logEntry,
            FILE_APPEND | LOCK_EX,
        );
    }

    private static function cleanOutputBuffers(): void {
        while (ob_get_level()) {
            @ob_end_clean();
        }
    }

    private static function emitJsonResponse(array $error): void {
        $isHeadersUnsent = (headers_sent() === false);

        if ($isHeadersUnsent) {
            header(sprintf('%s: %s', HttpHeaderType::ContentType->value, ContentTypeValueType::JsonUtf8->value));
            http_response_code(HttpStatusType::InternalServerError->value);
        }

        $frameData = FrameBuilder::buildFatalFrames($error);
        $response = self::buildResponse($error, $frameData['trace_lines'], $frameData['frames']);

        $json = @json_encode($response, JSON_UNESCAPED_SLASHES);

        if ($json === false) {
            echo json_encode(self::buildFallback($error));
        } else {
            echo $json;
        }

        exit;
    }

    private static function buildFallback(array $error): array {
        return [
            ResponseKeyType::Success->value => false,
            ResponseKeyType::Error->value   => [
                'code'    => self::ERROR_CODE_ENCODING_FAILED,
                'message' => self::MESSAGE_ENCODING_FAILED,
                'details' => [
                    'originalMessage' => substr($error['message'], 0, self::MESSAGE_TRUNCATE_LENGTH),
                    'file'            => basename($error['file']),
                    'line'            => $error['line'],
                    'jsonError'       => json_last_error_msg(),
                ],
            ],
        ];
    }
}

// Guard: Only register shutdown handler in web context (not CLI)
$isWebContext = (PHP_SAPI !== self::PHP_SAPI_CLI && PHP_SAPI !== self::PHP_SAPI_CLI_SERVER);

if ($isWebContext) {
    register_shutdown_function([FatalErrorHandler::class, 'handle']);
}
