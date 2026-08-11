# Subtask 151: Fix violations in backend/internal/services/sync/Crud.go

Target File: `backend/internal/services/sync/Crud.go`

## Violations

- **Line 174**: go-loose-types - Type erasure (any/interface{})
  `args := make([]any, len(files)+1)`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 19**: abbreviations - Invalid abbreviation casing
  `// SQL query constants (centralized per coding standard).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

