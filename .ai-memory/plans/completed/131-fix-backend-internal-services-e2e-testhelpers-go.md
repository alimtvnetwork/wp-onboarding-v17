# Subtask 131: Fix violations in backend/internal/services/e2e/TestHelpers.go

Target File: `backend/internal/services/e2e/TestHelpers.go`

## Violations

- **Line 141**: go-loose-types - Type erasure (any/interface{})
  `func toJson(v any) string {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 35**: abbreviations - Invalid abbreviation casing
  `// extractId pulls an int64 id from an API response.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] FIXED
