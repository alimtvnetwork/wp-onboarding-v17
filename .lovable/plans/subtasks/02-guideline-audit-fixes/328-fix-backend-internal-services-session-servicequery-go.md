# Subtask 328: Fix violations in backend/internal/services/session/ServiceQuery.go

Target File: `backend/internal/services/session/ServiceQuery.go`

## Violations

- **Line 162**: abbreviations - Invalid abbreviation casing
  `// entry and extracts the embedded stacktrace.txt content from its JSON context.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 189**: abbreviations - Invalid abbreviation casing
  `// parsePhpContent unmarshals the JSON fragment and returns the content field.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 191**: abbreviations - Invalid abbreviation casing
  `// stackTraceContentContext extracts "content" from remote_php_stacktrace log JSON.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 193**: abbreviations - Invalid abbreviation casing
  `Content string `json:"content"` // external key (session log JSON)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

