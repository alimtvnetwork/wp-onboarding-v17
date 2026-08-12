<?php
/**
 * Riseup Asia Uploader - Database Convenience Trait
 *
 * Thin Pdo wrappers for common Sql operations.
 *
 * @package RiseupAsia\Database\Traits
 * @since   1.4.0
 */

namespace RiseupAsia\Database\Traits;

if (defined('ABSPATH') === false) {
    exit;
}

use PDO;
use PDOException;
use PDOStatement;

/**
 * Trait DatabaseConvenienceTrait
 *
 * Provides queryAll, querySingle, insert, update, delete, execute, and lastInsertId
 * convenience methods. Expects $this->pdo to be a connected PDO instance.
 */
trait DatabaseConvenienceTrait {

    private const FALLBACK_INSERT_ID = '0';
    private const PRAGMA_TABLE_INFO_QUERY = 'PRAGMA table_info(%s)';

    /**
     * Execute a SELECT and return all matching rows.
     *
     * @param string $sql    Sql query with optional placeholders.
     * @param array  $params Bound parameters.
     * @param int    $mode   PDO fetch mode.
     * @return array
     */
    public function queryAll(string $sql, array $params = [], int $mode = PDO::FETCH_ASSOC): array {
        $stmt = $this->prepareAndExecute($sql, $params);
        return $stmt !== false ? $stmt->fetchAll($mode) : [];
    }

    /**
     * Execute a SELECT and return a single row.
     *
     * @param string $sql    Sql query with optional placeholders.
     * @param array  $params Bound parameters.
     * @param int    $mode   PDO fetch mode.
     * @return array|false
     */
    public function querySingle(string $sql, array $params = [], int $mode = PDO::FETCH_ASSOC) {
        $stmt = $this->prepareAndExecute($sql, $params);
        return $stmt !== false ? $stmt->fetch($mode) : false;
    }

    /**
     * Insert a row into the given table.
     *
     * @param string $table  Table name.
     * @param array  $data   Associative array of column => value.
     * @return bool
     */
    public function insert(string $table, array $data): bool {
        $columns      = implode(', ', array_keys($data));
        $placeholders = implode(', ', array_fill(0, count($data), '?'));
        $sql          = "INSERT INTO {$table} ({$columns}) VALUES ({$placeholders})";

        return $this->execute($sql, array_values($data));
    }

    /**
     * Update rows in the given table.
     *
     * @param string $table Table name.
     * @param array  $data  Associative array of column => value to set.
     * @param string $where WHERE clause (without the keyword).
     * @param array  $whereParams Bound parameters for the WHERE clause.
     * @return bool
     */
    public function update(string $table, array $data, string $where, array $whereParams = []): bool {
        $setParts = [];
        foreach (array_keys($data) as $col) {
            $setParts[] = "{$col} = ?";
        }

        $setClause = implode(', ', $setParts);
        $sql       = "UPDATE {$table} SET {$setClause} WHERE {$where}";

        return $this->execute($sql, array_merge(array_values($data), $whereParams));
    }

    /**
     * Delete rows from the given table.
     *
     * @param string $table       Table name.
     * @param string $where       WHERE clause (without the keyword).
     * @param array  $whereParams Bound parameters for the WHERE clause.
     * @return bool
     */
    public function delete(string $table, string $where, array $whereParams = []): bool {
        $sql = "DELETE FROM {$table} WHERE {$where}";
        return $this->execute($sql, $whereParams);
    }

    /**
     * Execute a statement (INSERT, UPDATE, DELETE, or DDL).
     *
     * @param string $sql    Sql statement.
     * @param array  $params Bound parameters.
     * @return bool
     */
    public function execute(string $sql, array $params = []): bool {
        $stmt = $this->prepareAndExecute($sql, $params);
        return $stmt !== false;
    }

    /**
     * Return the last inserted row Id.
     *
     * @return string
     */
    public function lastInsertId(): string {
        return $this->pdo !== null ? $this->pdo->lastInsertId() : self::FALLBACK_INSERT_ID;
    }

    /**
     * Prepare and execute a PDO statement.
     *
     * @param string $sql    Sql statement.
     * @param array  $params Bound parameters.
     * @return PDOStatement|false
     */
    private function prepareAndExecute(string $sql, array $params = []) {
        $isPdoMissing = $this->pdo === null;

        if ($isPdoMissing === true) {
            return false;
        }

        return \RiseupAsia\Database\QueryLogger::executeSafely(function () use ($sql, $params) {
            $stmt = $this->pdo->prepare($sql);
            if ($stmt !== false && $stmt->execute($params) === true) {
                return $stmt;
            }
            return false;
        }, $sql);
    }

    /**
     * Execute Sql only if the given column does not yet exist on the table.
     *
     * Used by migration traits to safely ADD COLUMN without failing on
     * re-runs or partial migrations.
     *
     * @param string $table  Table name.
     * @param string $column Column name to check.
     * @param string $sql    DDL statement to execute when the column is missing.
     */
    private function execIfColumnMissing(string $table, string $column, string $sql): void {
        $query = sprintf(self::PRAGMA_TABLE_INFO_QUERY, $table);
        $rows = $this->pdo->query($query)->fetchAll(PDO::FETCH_ASSOC);

        foreach ($rows as $row) {
            if (strcasecmp($row['name'], $column) === 0) {
                $this->fileLogger->debug("Column already exists, skipping", [
                    'table'  => $table,
                    'column' => $column,
                ]);
                return;
            }
        }

        $this->pdo->exec($sql);
        $this->fileLogger->info("Column added via migration", [
            'table'  => $table,
            'column' => $column,
        ]);
    }
}
