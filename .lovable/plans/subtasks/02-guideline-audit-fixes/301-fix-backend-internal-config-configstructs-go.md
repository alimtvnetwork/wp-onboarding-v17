# Subtask 301: Fix violations in backend/internal/config/ConfigStructs.go

Target File: `backend/internal/config/ConfigStructs.go`

## Violations

- **Line 21**: abbreviations - Invalid abbreviation casing
  `// ResponseDebugConfig controls error verbosity in API responses.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 83**: abbreviations - Invalid abbreviation casing
  `// WordPressConfig holds WordPress API settings`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 113**: abbreviations - Invalid abbreviation casing
  `URL                 string`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

