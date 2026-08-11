# Subtask 294: Fix violations in backend/internal/api/handlers/SiteBootstrapHandlers.go

Target File: `backend/internal/api/handlers/SiteBootstrapHandlers.go`

## Violations

- **Line 15**: abbreviations - Invalid abbreviation casing
  `// bootstrapInput is the optional JSON body for BootstrapUploader.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 50**: abbreviations - Invalid abbreviation casing
  `// bulkBootstrapInput is the JSON body for BulkBootstrapUploader.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 68**: abbreviations - Invalid abbreviation casing
  `respondError(w, wordpress.HttpStatusBadRequest, apperror.ErrConfigParse, "At least one site ID is required")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

