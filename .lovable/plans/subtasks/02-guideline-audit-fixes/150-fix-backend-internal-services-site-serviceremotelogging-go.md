# Subtask 150: Fix violations in backend/internal/services/site/ServiceRemoteLogging.go

Target File: `backend/internal/services/site/ServiceRemoteLogging.go`

## Violations

- **Line 169**: go-loose-types - Type erasure (any/interface{})
  `func buildRemoteActionLogFields(input loggerEmitInput) []any {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 170**: go-loose-types - Type erasure (any/interface{})
  `logFields := []any{"site", input.Ctx.SiteName}`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 68**: abbreviations - Invalid abbreviation casing
  `// resolveRemoteActionLogContext extracts and resolves log context from details JSON.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 82**: abbreviations - Invalid abbreviation casing
  `// parseRemoteActionLogDetails extracts context from JSON details.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 101**: abbreviations - Invalid abbreviation casing
  `// fillMissingSiteContext loads site info from DB if name or URL is missing.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 117**: abbreviations - Invalid abbreviation casing
  `// applySiteContextFromDB fetches the site and fills missing name/URL fields.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 130**: abbreviations - Invalid abbreviation casing
  `// applySiteFields copies missing name and URL from the site model.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

