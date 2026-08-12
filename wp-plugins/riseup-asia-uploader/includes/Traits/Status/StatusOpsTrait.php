<?php
/**
 * StatusOpsTrait — OpenAPI and OPcache reset handlers.
 *
 * @package RiseupAsia\Traits\Status
 * @since   1.57.0
 */

namespace RiseupAsia\Traits\Status;

if (!defined('ABSPATH')) {
    exit;
}

use WP_REST_Request;
use WP_REST_Response;
use RiseupAsia\Enums\EndpointType;
use RiseupAsia\Enums\HttpStatusType;
use RiseupAsia\Enums\PluginConfigType;
use RiseupAsia\Enums\ResponseKeyType;
use RiseupAsia\Helpers\BooleanHelpers;
use RiseupAsia\Helpers\PathHelper;
use RiseupAsia\Helpers\EnvelopeBuilder;
use RiseupAsia\Helpers\DateHelper;
use RiseupAsia\Helpers\ResultHelper;

trait StatusOpsTrait {

    private const SPEC_KEY_SERVERS        = 'servers';
    private const SPEC_KEY_VARIABLES      = 'variables';
    private const SPEC_KEY_BASE_URL       = 'baseUrl';
    private const SPEC_KEY_DEFAULT        = 'default';
    private const SPEC_SERVER_INDEX       = 0;

    private const WP_CACHE_PLUGINS        = 'plugins';
    private const FUNC_OPCACHE_RESET      = 'opcache_reset';
    private const FUNC_OPCACHE_INVALIDATE = 'opcache_invalidate';

    private const MSG_SPEC_NOT_FOUND      = 'OpenApi specification file not found';
    private const MSG_SPEC_READ_FAIL      = 'Failed to read OpenApi specification';
    private const MSG_SPEC_INVALID_FMT    = 'Invalid OpenApi specification format';
    private const MSG_OPCACHE_RESET       = 'Opcache reset complete';

    public function handleOpenapi(WP_REST_Request $request): WP_REST_Response {
        return $this->safeExecute(function () use ($request) {
            $this->fileLogger->info('OpenApi endpoint called');
            $spec = $this->loadOpenApiSpec();

            if ($spec instanceof WP_REST_Response) {
                return $spec;
            }
            $spec[self::SPEC_KEY_SERVERS][self::SPEC_SERVER_INDEX][self::SPEC_KEY_VARIABLES][self::SPEC_KEY_BASE_URL][self::SPEC_KEY_DEFAULT] = get_site_url();

            return new WP_REST_Response($spec, HttpStatusType::Ok->value);
        }, 'handleOpenapi');
    }

    private function loadOpenApiSpec(): array|WP_REST_Response {
        $specFile = PathHelper::getOpenApiJsonPath();
        if (PathHelper::isFileMissing($specFile)) {
            return $this->buildSpecError(self::MSG_SPEC_NOT_FOUND, $specFile);
        }

        return $this->parseSpecFile($specFile);
    }

    private function buildSpecError(string $message, string $path): WP_REST_Response {
        $this->fileLogger->error($message, ['path' => $path]);

        return new WP_REST_Response(
            ResultHelper::error($message),
            HttpStatusType::NotFound->value,
        );
    }

    private function parseSpecFile(string $specFile): array|WP_REST_Response {
        $specContent = file_get_contents($specFile);

        if ($specContent === false) {
            $this->fileLogger->error('Failed to read OpenApi spec file');

            return new WP_REST_Response(
                ResultHelper::error(self::MSG_SPEC_READ_FAIL),
                HttpStatusType::InternalServerError->value,
            );
        }

        $spec = json_decode($specContent, true);

        if ($spec === null) {
            $this->fileLogger->error('Invalid Json in OpenApi spec file');

            return new WP_REST_Response(
                ResultHelper::error(self::MSG_SPEC_INVALID_FMT),
                HttpStatusType::InternalServerError->value,
            );
        }

        return $spec;
    }

    public function handleOpcacheReset(WP_REST_Request $request): WP_REST_Response {
        return $this->safeExecute(function () use ($request) {
            $this->fileLogger->info('Opcache reset endpoint called');
            $result = $this->buildOpcacheResult();
            $result[ResponseKeyType::FilesInvalidated->value] = $this->invalidatePluginFiles();
            wp_cache_delete(self::WP_CACHE_PLUGINS, self::WP_CACHE_PLUGINS);

            return EnvelopeBuilder::success(self::MSG_OPCACHE_RESET)
                ->setRequestedAt('/' . PluginConfigType::apiFullNamespace() . '/' . EndpointType::OpcacheReset->value)
                ->setSingleResult($result)
                ->toResponse();
        }, 'handleOpcacheReset');
    }

    private function buildOpcacheResult(): array {
        $result = ResultHelper::ok([
            ResponseKeyType::OpcacheAvailable->value => function_exists(self::FUNC_OPCACHE_RESET),
            ResponseKeyType::OpcacheReset->value     => false,
            ResponseKeyType::FilesInvalidated->value => 0,
            ResponseKeyType::Timestamp->value        => DateHelper::nowIso(),
        ]);

        if (function_exists(self::FUNC_OPCACHE_RESET)) {
            $result[ResponseKeyType::OpcacheReset->value] = opcache_reset();
            $this->fileLogger->info('Opcache reset executed', ['result' => $result[ResponseKeyType::OpcacheReset->value]]);
        }

        return $result;
    }

    private function invalidatePluginFiles(): int {
        if (BooleanHelpers::isFuncMissing(self::FUNC_OPCACHE_INVALIDATE)) {
            return 0;
        }
        $filesToInvalidate = [
            PathHelper::getPluginMainFile(),
            PathHelper::getConstantsFile(),
        ];
        $invalidated = 0;

        foreach ($filesToInvalidate as $file) {
            if (file_exists($file)) {
                clearstatcache(true, $file);
                opcache_invalidate($file, true);
                $invalidated++;
            }
        }

        return $invalidated;
    }
}
