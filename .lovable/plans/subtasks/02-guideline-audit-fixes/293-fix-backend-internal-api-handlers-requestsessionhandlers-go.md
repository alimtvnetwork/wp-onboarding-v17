# Subtask 293: Fix violations in backend/internal/api/handlers/RequestSessionHandlers.go

Target File: `backend/internal/api/handlers/RequestSessionHandlers.go`

## Violations

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package handlers - Request Session API handlers`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 31**: abbreviations - Invalid abbreviation casing
  `limit, _ := strconv.Atoi(r.URL.Query().Get("limit"))`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 32**: abbreviations - Invalid abbreviation casing
  `offset, _ := strconv.Atoi(r.URL.Query().Get("offset"))`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 59**: abbreviations - Invalid abbreviation casing
  `// GetRequestSession returns a single request session by ID`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 170**: abbreviations - Invalid abbreviation casing
  `limit, _ := strconv.Atoi(r.URL.Query().Get("limit"))`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 208**: abbreviations - Invalid abbreviation casing
  `// ExportRequestSession exports a session as JSON for debugging`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

