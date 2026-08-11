# Subtask 302: Fix violations in backend/internal/database/Database.go

Target File: `backend/internal/database/Database.go`

## Violations

- **Line 17**: abbreviations - Invalid abbreviation casing
  `// DB wraps the SQL database connection with Split DB support`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

