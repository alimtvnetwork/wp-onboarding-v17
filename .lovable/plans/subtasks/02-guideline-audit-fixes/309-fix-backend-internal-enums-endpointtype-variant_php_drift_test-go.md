# Subtask 309: Fix violations in backend/internal/enums/endpointtype/variant_php_drift_test.go

Target File: `backend/internal/enums/endpointtype/variant_php_drift_test.go`

## Violations

- **Line 25**: abbreviations - Invalid abbreviation casing
  `// WpJson is a URL-building prefix in PHP, not an API endpoint.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 27**: abbreviations - Invalid abbreviation casing
  `// PostsById is a Go-only parameterised route; PHP handles it via /posts + body ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

