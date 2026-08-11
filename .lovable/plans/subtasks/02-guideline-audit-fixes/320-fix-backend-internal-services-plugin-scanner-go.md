# Subtask 320: Fix violations in backend/internal/services/plugin/Scanner.go

Target File: `backend/internal/services/plugin/Scanner.go`

## Violations

- **Line 132**: abbreviations - Invalid abbreviation casing
  `// writeDetectedFile marshals and writes the detected plugin JSON.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

