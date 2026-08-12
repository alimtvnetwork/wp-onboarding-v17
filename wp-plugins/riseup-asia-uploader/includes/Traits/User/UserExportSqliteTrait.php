<?php
/**
 * UserExportSqliteTrait — GET /users/export-sqlite handler.
 *
 * Exports all users into a SQLite database bundled as ZIP.
 *
 * @package RiseupAsia\Traits\User
 * @since   2.13.0
 */

namespace RiseupAsia\Traits\User;

if (defined('ABSPATH') === false) {
    exit;
}

use PDO;
use WP_REST_Request;
use WP_REST_Response;
use WP_User_Query;
use ZipArchive;
use RiseupAsia\Enums\UserMetaKeyType;
use RiseupAsia\Helpers\EnvelopeBuilder;

trait UserExportSqliteTrait {

    private const TEMP_DIR_SUFFIX = '/riseup-asia-uploader/temp';
    private const DB_FILE_NAME = 'users-export.sqlite';
    private const ZIP_FILE_NAME = 'users-export.zip';
    private const SQLITE_PREFIX = 'sqlite:';
    
    private const HTTP_STATUS_OK = 200;
    private const CONTENT_TYPE_ZIP = 'application/zip';
    private const CONTENT_DISPOSITION_ZIP = 'attachment; filename="users-export.zip"';
    
    private const ROLE_SUBSCRIBER = 'subscriber';

    private const QUERY_KEY_NUMBER = 'number';
    private const QUERY_KEY_ORDERBY = 'orderby';
    private const QUERY_KEY_ORDER = 'order';
    
    private const QUERY_VAL_ALL = -1;
    private const QUERY_VAL_ID = 'id';
    private const QUERY_VAL_ASC = 'ASC';

    private const META_FIRST_NAME = 'first_name';
    private const META_LAST_NAME = 'last_name';
    private const META_NICKNAME = 'nickname';
    private const META_DESCRIPTION = 'description';

    private const SQL_CREATE_USERS = "CREATE TABLE users (
            id              INTEGER PRIMARY KEY,
            username        TEXT NOT NULL UNIQUE,
            email           TEXT NOT NULL,
            password_hash   TEXT NOT NULL,
            first_name      TEXT DEFAULT '',
            last_name       TEXT DEFAULT '',
            display_name    TEXT DEFAULT '',
            nickname        TEXT DEFAULT '',
            website         TEXT DEFAULT '',
            bio             TEXT DEFAULT '',
            role            TEXT DEFAULT 'subscriber',
            registered_at   TEXT DEFAULT ''
        )";

    private const SQL_CREATE_USER_SOCIAL = "CREATE TABLE user_social (
            user_id   INTEGER NOT NULL REFERENCES users(id),
            platform  TEXT NOT NULL,
            url       TEXT DEFAULT '',
            PRIMARY KEY (user_id, platform)
        )";

    private const SQL_CREATE_USER_YOAST = "CREATE TABLE user_yoast (
            user_id   INTEGER NOT NULL REFERENCES users(id),
            meta_key  TEXT NOT NULL,
            value     TEXT DEFAULT '',
            PRIMARY KEY (user_id, meta_key)
        )";

    private const SQL_INSERT_USER = "INSERT INTO users
            (id, username, email, password_hash, first_name, last_name, display_name, nickname, website, bio, role, registered_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    private const SQL_INSERT_SOCIAL = "INSERT INTO user_social (user_id, platform, url) VALUES (?, ?, ?)";
    private const SQL_INSERT_YOAST = "INSERT INTO user_yoast (user_id, meta_key, value) VALUES (?, ?, ?)";

    /**
     * Handle GET /users/export-sqlite — export as SQLite ZIP.
     */
    public function handleExportSqlite(WP_REST_Request $request): WP_REST_Response
    {
        $this->fileLogger->info('User endpoint accessed', ['endpoint' => 'GET /users/export-sqlite']);

        return $this->safeExecute(function () use ($request) {
            $uploadDir = wp_upload_dir();
            $tempDir = $uploadDir['basedir'] . self::TEMP_DIR_SUFFIX;
            wp_mkdir_p($tempDir);

            $dbPath  = $tempDir . '/' . self::DB_FILE_NAME;
            $zipPath = $tempDir . '/' . self::ZIP_FILE_NAME;

            // Clean up previous exports
            if (file_exists($dbPath) === true) { unlink($dbPath); }
            if (file_exists($zipPath) === true) { unlink($zipPath); }

            $pdo = new PDO(self::SQLITE_PREFIX . $dbPath);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $this->createSqliteUserSchema($pdo);

            $userQuery = new WP_User_Query([
                self::QUERY_KEY_NUMBER  => self::QUERY_VAL_ALL,
                self::QUERY_KEY_ORDERBY => self::QUERY_VAL_ID,
                self::QUERY_KEY_ORDER   => self::QUERY_VAL_ASC,
            ]);
            $users = $userQuery->get_results();

            $this->populateSqliteUsers($pdo, $users);

            $pdo = null;

            // Create ZIP
            $zip = new ZipArchive();
            $zip->open($zipPath, ZipArchive::CREATE);
            $zip->addFile($dbPath, self::DB_FILE_NAME);
            $zip->close();

            $zipContent = file_get_contents($zipPath);

            // Cleanup temp files
            unlink($dbPath);
            unlink($zipPath);

            $this->fileLogger->info('Users exported as SQLite ZIP', [
                'count' => count($users),
                'by'    => wp_get_current_user()->user_login,
            ]);

            $response = new WP_REST_Response($zipContent, self::HTTP_STATUS_OK);
            $response->header('Content-Type', self::CONTENT_TYPE_ZIP);
            $response->header('Content-Disposition', self::CONTENT_DISPOSITION_ZIP);

            return $response;
        }, 'handleExportSqlite');
    }

    private function createSqliteUserSchema(PDO $pdo): void
    {
        $pdo->exec(self::SQL_CREATE_USERS);
        $pdo->exec(self::SQL_CREATE_USER_SOCIAL);
        $pdo->exec(self::SQL_CREATE_USER_YOAST);
    }

    /**
     * @param \WP_User[] $users
     */
    private function populateSqliteUsers(PDO $pdo, array $users): void
    {
        $userStmt = $pdo->prepare(self::SQL_INSERT_USER);
        $socialStmt = $pdo->prepare(self::SQL_INSERT_SOCIAL);
        $yoastStmt  = $pdo->prepare(self::SQL_INSERT_YOAST);

        $pdo->beginTransaction();

        foreach ($users as $user) {
            $roles = $user->roles;
            $primaryRole = empty($roles) === false ? reset($roles) : self::ROLE_SUBSCRIBER;

            $userStmt->execute([
                $user->id,
                $user->user_login,
                $user->user_email,
                $user->user_pass,
                get_user_meta($user->id, self::META_FIRST_NAME, true) ?: '',
                get_user_meta($user->id, self::META_LAST_NAME, true) ?: '',
                $user->display_name,
                get_user_meta($user->id, self::META_NICKNAME, true) ?: '',
                $user->user_url,
                get_user_meta($user->id, self::META_DESCRIPTION, true) ?: '',
                $primaryRole,
                $user->user_registered,
            ]);

            // Social meta
            foreach (UserMetaKeyType::socialCases() as $meta) {
                $value = get_user_meta($user->id, $meta->value, true);
                $hasValue = empty($value) === false;

                if ($hasValue === true) {
                    $socialStmt->execute([$user->id, $meta->jsonKey(), $value]);
                }
            }

            // Yoast meta
            foreach (UserMetaKeyType::yoastCases() as $meta) {
                $value = get_user_meta($user->id, $meta->value, true);
                $hasValue = empty($value) === false;

                if ($hasValue === true) {
                    $yoastStmt->execute([$user->id, $meta->jsonKey(), $value]);
                }
            }
        }

        $pdo->commit();
    }
}
