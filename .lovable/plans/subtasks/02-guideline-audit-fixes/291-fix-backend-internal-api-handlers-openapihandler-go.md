# Subtask 291: Fix violations in backend/internal/api/handlers/OpenapiHandler.go

Target File: `backend/internal/api/handlers/OpenapiHandler.go`

## Violations

- **Line 18**: abbreviations - Invalid abbreviation casing
  `// ServeOpenApiSpec returns the OpenAPI 3.0 specification as JSON`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

