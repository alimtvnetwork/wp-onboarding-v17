# Subtask 117: Fix violations in backend/internal/database/DatabaseVersions.go

Target File: `backend/internal/database/DatabaseVersions.go`

## Violations

- **Line 80**: go-loose-types - Type erasure (any/interface{})
  `func buildVersionQuery(pluginId int64, siteId *int64, limit int) (string, []any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 82**: go-loose-types - Type erasure (any/interface{})
  `args := []any{pluginId}`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 42**: abbreviations - Invalid abbreviation casing
  `return 0, apperror.Wrap(lastIdErr, apperror.ErrDatabaseQuery, "failed to get last insert ID for plugin version")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 230**: abbreviations - Invalid abbreviation casing
  `// SQL constants`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

