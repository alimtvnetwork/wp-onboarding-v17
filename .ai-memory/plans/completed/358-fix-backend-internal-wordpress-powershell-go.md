# Subtask 358: Fix violations in backend/internal/wordpress/Powershell.go

Target File: `backend/internal/wordpress/Powershell.go`

## Violations

- **Line 37**: abbreviations - Invalid abbreviation casing
  `// psJsonOutput is the typed struct for parsing PowerShell quiet-mode JSON.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 39**: abbreviations - Invalid abbreviation casing
  `Success   bool   `json:"success"`   // external key (PowerShell JSON output)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 46**: abbreviations - Invalid abbreviation casing
  `// It passes config as inline JSON for direct invocation from the app.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 68**: abbreviations - Invalid abbreviation casing
  `// buildPsJsonConfigArgs constructs PowerShell arguments for JSON config mode.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 107**: abbreviations - Invalid abbreviation casing
  `// This is simpler than JSON config and works well for programmatic invocation.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

