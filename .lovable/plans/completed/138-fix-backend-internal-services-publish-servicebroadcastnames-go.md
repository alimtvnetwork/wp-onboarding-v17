# Subtask 138: Fix violations in backend/internal/services/publish/ServiceBroadcastNames.go

Target File: `backend/internal/services/publish/ServiceBroadcastNames.go`

## Violations

- **Line 39**: go-loose-types - Type erasure (any/interface{})
  `func buildLogFields(ctx logContext) []any {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 40**: go-loose-types - Type erasure (any/interface{})
  `fields := []any{"plugin", ctx.PluginName, "site", ctx.SiteName}`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 52**: abbreviations - Invalid abbreviation casing
  `// resolvedNames holds the resolved plugin, site name and URL.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 68**: abbreviations - Invalid abbreviation casing
  `// parseNameDetails extracts names from JSON details.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 110**: abbreviations - Invalid abbreviation casing
  `// resolveSiteNames fetches site name/URL from DB if not provided.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] SKIPPED (False Positive)
