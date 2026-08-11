# Subtask 304: Fix violations in backend/internal/database/Migrations.go

Target File: `backend/internal/database/Migrations.go`

## Violations

- **Line 117**: abbreviations - Invalid abbreviation casing
  `// executeMigrationTx runs the SQL and records the migration within a transaction.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 119**: abbreviations - Invalid abbreviation casing
  `_, err := tx.Exec(m.SQL)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 121**: abbreviations - Invalid abbreviation casing
  `return wrapMigrationError(err, "failed to apply migration SQL", m.Version).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

