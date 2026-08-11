# Subtask 327: Fix violations in backend/internal/services/session/ServiceLifecycle.go

Target File: `backend/internal/services/session/ServiceLifecycle.go`

## Violations

- **Line 133**: abbreviations - Invalid abbreviation casing
  `header += fmt.Sprintf(" PLUGIN: %s (ID: %d)\n", shi.Input.PluginName, shi.Input.PluginId)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 139**: abbreviations - Invalid abbreviation casing
  `header += fmt.Sprintf(" SITE: %s (ID: %d)\n", shi.Input.SiteName, shi.Input.SiteId)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 204**: abbreviations - Invalid abbreviation casing
  `// writeLogDetails writes indented JSON details to the log file if present.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

