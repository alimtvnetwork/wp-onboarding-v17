# Subtask 303: Fix violations in backend/internal/database/DatabaseCredentials.go

Target File: `backend/internal/database/DatabaseCredentials.go`

## Violations

- **Line 53**: abbreviations - Invalid abbreviation casing
  `return 0, apperror.Wrap(lastIdErr, apperror.ErrDatabaseQuery, "failed to get credential insert ID")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 176**: abbreviations - Invalid abbreviation casing
  `// DeleteSiteCredential deletes a credential by ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] FIXED
