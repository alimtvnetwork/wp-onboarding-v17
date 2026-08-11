# Subtask 128: Fix violations in backend/internal/services/e2e/Service.go

Target File: `backend/internal/services/e2e/Service.go`

## Violations

- **Line 144**: go-loose-types - Type erasure (any/interface{})
  `Broadcast        func(event string, data any)`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 157**: go-loose-types - Type erasure (any/interface{})
  `broadcast        func(event string, data any)`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 12**: abbreviations - Invalid abbreviation casing
  `// SQL constants`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 145**: abbreviations - Invalid abbreviation casing
  `BaseUrl          string // Backend API base URL (e.g. "http://localhost:8080")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 147**: abbreviations - Invalid abbreviation casing
  `TestSiteUrl      string // WordPress test site URL`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

