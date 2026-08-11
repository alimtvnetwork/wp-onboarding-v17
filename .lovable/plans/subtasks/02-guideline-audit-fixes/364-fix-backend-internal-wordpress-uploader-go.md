# Subtask 364: Fix violations in backend/internal/wordpress/Uploader.go

Target File: `backend/internal/wordpress/Uploader.go`

## Violations

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package wordpress provides uploader capabilities using the Rise Up Uploader API.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 24**: abbreviations - Invalid abbreviation casing
  `Status           string            `json:"status"`            // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 41**: abbreviations - Invalid abbreviation casing
  `Success       bool   `json:"success"`                    // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 71**: abbreviations - Invalid abbreviation casing
  `Slug        string `json:"slug"`        // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 82**: abbreviations - Invalid abbreviation casing
  `Path     string `json:"path"`     // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

