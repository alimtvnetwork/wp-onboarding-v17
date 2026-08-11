# Subtask 298: Fix violations in backend/internal/api/middleware/SessionLogging.go

Target File: `backend/internal/api/middleware/SessionLogging.go`

## Violations

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package middleware - Session-based API logging`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 20**: abbreviations - Invalid abbreviation casing
  `// SessionContextKey is the context key for session ID`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 23**: abbreviations - Invalid abbreviation casing
  `// RequestSession contains session data for a single API request`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 63**: abbreviations - Invalid abbreviation casing
  `// SessionLogging creates middleware that logs all API requests with full details`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 67**: abbreviations - Invalid abbreviation casing
  `// Skip if session logging is disabled or for non-API routes`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 68**: abbreviations - Invalid abbreviation casing
  `isApiRoute := strings.HasPrefix(r.URL.Path, "/api/")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 77**: abbreviations - Invalid abbreviation casing
  `isHealthCheck := r.URL.Path == wordpress.GoApiHealth`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 122**: abbreviations - Invalid abbreviation casing
  `// Add session ID to context`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 143**: abbreviations - Invalid abbreviation casing
  `Path:         r.URL.Path,`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 144**: abbreviations - Invalid abbreviation casing
  `Query:        r.URL.RawQuery,`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 174**: abbreviations - Invalid abbreviation casing
  `log.Warn("API request failed",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 177**: abbreviations - Invalid abbreviation casing
  `"path", r.URL.Path,`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 186**: abbreviations - Invalid abbreviation casing
  `// GetSessionId extracts the session ID from context`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 227**: abbreviations - Invalid abbreviation casing
  `// extractErrorFromResponse tries to extract error message from JSON response`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

