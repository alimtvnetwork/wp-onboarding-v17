# Subtask 147: Fix violations in backend/internal/services/site/CrudQueries.go

Target File: `backend/internal/services/site/CrudQueries.go`

## Violations

- **Line 71**: go-loose-types - Type erasure (any/interface{})
  `func scanSiteColumns(dest *siteRaw, scan func(dest ...any) error) error {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 10**: abbreviations - Invalid abbreviation casing
  `// SQL query constants (centralized per coding standard).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

