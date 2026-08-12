<?php
/**
 * DatabaseMigrationsV17Trait — Create CloudStorageAccounts table.
 *
 * @package RiseupAsia\Database\Traits
 * @since   2.15.0
 */

namespace RiseupAsia\Database\Traits;

if (defined('ABSPATH') === false) {
    exit;
}

use RiseupAsia\Enums\TableType;

trait DatabaseMigrationsV17Trait {

    private const MIGRATION_VERSION_17 = 17;

    private const V17_CREATE_TABLE_QUERY = <<<Sql
        CREATE TABLE IF NOT EXISTS %s (
            Id              INTEGER PRIMARY KEY AUTOINCREMENT,
            Provider        TEXT    NOT NULL,
            AccountLabel    TEXT    NOT NULL,
            Username        TEXT    DEFAULT '',
            Email           TEXT    DEFAULT '',
            AccessToken     TEXT    NOT NULL,
            RefreshToken    TEXT    DEFAULT '',
            TokenExpiresAt  TEXT    DEFAULT '',
            BaseUrl         TEXT    DEFAULT '',
            RepoName        TEXT    DEFAULT '',
            RepoOwner       TEXT    DEFAULT '',
            FolderId        TEXT    DEFAULT '',
            FolderName      TEXT    DEFAULT '',
            IsActive        INTEGER NOT NULL DEFAULT 1,
            LastUsedAt      TEXT    DEFAULT '',
            LastError       TEXT    DEFAULT '',
            CreatedAt       TEXT    NOT NULL DEFAULT (datetime('now')),
            UpdatedAt       TEXT    NOT NULL DEFAULT (datetime('now'))
        )
    Sql;

    private const V17_INDEX_PROVIDER_QUERY = 'CREATE INDEX IF NOT EXISTS idx_csa_provider ON %s(Provider)';
    private const V17_INDEX_ACTIVE_QUERY = 'CREATE INDEX IF NOT EXISTS idx_csa_active ON %s(IsActive)';

    private function migrateV17CloudStorageAccounts(int $current): void {
        if ($current >= self::MIGRATION_VERSION_17) {
            return;
        }

        $this->fileLogger->info('Applying migration v17: CloudStorageAccounts table');
        $table = TableType::CloudStorageAccounts->value;

        $this->pdo->exec(sprintf(self::V17_CREATE_TABLE_QUERY, $table));

        $this->pdo->exec(sprintf(self::V17_INDEX_PROVIDER_QUERY, $table));
        $this->pdo->exec(sprintf(self::V17_INDEX_ACTIVE_QUERY, $table));

        $this->recordMigration(self::MIGRATION_VERSION_17);
    }
}
