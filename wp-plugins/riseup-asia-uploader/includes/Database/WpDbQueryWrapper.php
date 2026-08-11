<?php
/**
 * WpDbQueryWrapper — safely wraps global $wpdb calls to catch and log errors.
 *
 * @package RiseupAsia\Database
 * @since   1.59.0
 */

namespace RiseupAsia\Database;

if (!defined('ABSPATH')) {
    exit;
}

use wpdb;
use Throwable;
use RiseupAsia\Logging\FileLogger;
use RiseupAsia\Enums\ResponseMessageType;

class WpDbQueryWrapper {
    /**
     * Executes a $wpdb callable and explicitly logs if $wpdb->last_error is set or an exception is thrown.
     *
     * @template T
     * @param wpdb $wpdb
     * @param callable(wpdb): T $callback
     * @param string $contextSql
     * @return T|false
     */
    public static function execute(wpdb $wpdb, callable $callback, string $contextSql = '') {
        $previousSuppress = $wpdb->suppress_errors(true);

        try {
            $result = $callback($wpdb);

            if (!empty($wpdb->last_error)) {
                FileLogger::getInstance()->error(ResponseMessageType::DbQueryFailed->value, [
                    'sql'   => $contextSql ?: $wpdb->last_query,
                    'error' => $wpdb->last_error,
                ]);
            }

            return $result;
        } catch (Throwable $e) {
            FileLogger::getInstance()->error(ResponseMessageType::DbQueryFailed->value, [
                'sql'   => $contextSql ?: $wpdb->last_query,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);
            return false;
        } finally {
            $wpdb->suppress_errors($previousSuppress);
        }
    }
}
