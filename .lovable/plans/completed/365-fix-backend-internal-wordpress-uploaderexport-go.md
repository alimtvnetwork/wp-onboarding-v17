# Subtask 365: Fix violations in backend/internal/wordpress/UploaderExport.go

Target File: `backend/internal/wordpress/UploaderExport.go`

## Violations

- **Line 20**: abbreviations - Invalid abbreviation casing
  `Success   bool   `json:"success"`    // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 61**: abbreviations - Invalid abbreviation casing
  `Success    bool   `json:"success"`    // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 100**: abbreviations - Invalid abbreviation casing
  `// callExportSelf sends the export-self API call.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

