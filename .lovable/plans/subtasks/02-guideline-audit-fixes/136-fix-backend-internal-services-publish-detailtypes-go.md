# Subtask 136: Fix violations in backend/internal/services/publish/DetailTypes.go

Target File: `backend/internal/services/publish/DetailTypes.go`

## Violations

- **Line 2**: go-loose-types - Type erasure (any/interface{})
  `// These replace inline map[string]any literals at call sites,`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 13**: go-loose-types - Type erasure (any/interface{})
  `func toDetails[T any](v T) json.RawMessage {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 145**: abbreviations - Invalid abbreviation casing
  `// ActivateRequestInfo carries API request details.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 152**: abbreviations - Invalid abbreviation casing
  `// ActivateResponseInfo carries API response details.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

