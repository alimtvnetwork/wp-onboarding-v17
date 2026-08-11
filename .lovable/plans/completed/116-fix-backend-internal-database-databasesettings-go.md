# Subtask 116: Fix violations in backend/internal/database/DatabaseSettings.go

Target File: `backend/internal/database/DatabaseSettings.go`

## Violations

- **Line 46**: go-loose-types - Type erasure (any/interface{})
  `func (db *DB) SetSettingIfNotExists(key string, value any) *apperror.AppError {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 126**: abbreviations - Invalid abbreviation casing
  `// GetSiteIdByUrl returns the site ID for a given URL`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 132**: abbreviations - Invalid abbreviation casing
  `return 0, apperror.Wrap(err, apperror.ErrDatabaseQuery, "failed to get site by URL").`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 139**: abbreviations - Invalid abbreviation casing
  `// GetPluginIdByPath returns the plugin ID for a given path`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 178**: abbreviations - Invalid abbreviation casing
  `return 0, apperror.Wrap(lastIdErr, apperror.ErrDatabaseQuery, "failed to get last insert ID for seed site")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 213**: abbreviations - Invalid abbreviation casing
  `return 0, apperror.Wrap(lastIdErr, apperror.ErrDatabaseQuery, "failed to get last insert ID for seed plugin")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] FIXED
Lines 126, 132, 139, 178, 213 are [x] SKIPPED (False Positive)
