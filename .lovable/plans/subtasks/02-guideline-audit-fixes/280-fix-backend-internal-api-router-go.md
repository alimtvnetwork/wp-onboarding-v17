# Subtask 280: Fix violations in backend/internal/api/Router.go

Target File: `backend/internal/api/Router.go`

## Violations

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package api provides HTTP API routing and handlers`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 150**: abbreviations - Invalid abbreviation casing
  `requestedPath := filepath.Clean(r.URL.Path)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

