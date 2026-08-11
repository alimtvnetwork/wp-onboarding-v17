<?php
/**
 * QueryLogger — explicitly logs query exceptions according to error manage specs.
 *
 * @package RiseupAsia\Database
 * @since   1.59.0
 */

namespace RiseupAsia\Database;

if (!defined('ABSPATH')) {
    exit;
}

use PDOException;
use Throwable;
use RiseupAsia\Logging\FileLogger;
use RiseupAsia\Enums\ResponseMessageType;

class QueryLogger {
    /**
     * Executes a callback and catches/logs any PDO or general query exceptions.
     *
     * @template T
     * @param callable(): T $callback
     * @param string $sql
     * @param array $context
     * @return T|false
     */
    public static function executeSafely(callable $callback, string $sql = '', array $context = []) {
        try {
            return $callback();
        } catch (PDOException $e) {
            FileLogger::getInstance()->error(ResponseMessageType::DbQueryFailed->value, array_merge([
                'sql'   => $sql,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ], $context));
            return false;
        } catch (Throwable $e) {
            FileLogger::getInstance()->error(ResponseMessageType::DbQueryFailed->value, array_merge([
                'sql'   => $sql,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ], $context));
            return false;
        }
    }
}
