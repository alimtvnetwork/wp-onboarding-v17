# Subtask 370: Fix violations in backend/pkg/apperror/Codes.go

Target File: `backend/pkg/apperror/Codes.go`

## Violations

- **Line 47**: abbreviations - Invalid abbreviation casing
  `// WordPress API errors (E3xxx)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 51**: abbreviations - Invalid abbreviation casing
  `ErrWPAPIDisabled    ErrorCode = "E3003" // REST API is disabled`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 61**: abbreviations - Invalid abbreviation casing
  `ErrWPEndpointMismatch  ErrorCode = "E3013" // REST API returned HTML — endpoint/namespace not registered`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

