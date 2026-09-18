# Subtask 360: Fix violations in backend/internal/wordpress/RequestTypes.go

Target File: `backend/internal/wordpress/RequestTypes.go`

## Violations

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package wordpress — typed request body structs for WordPress API calls.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 6**: abbreviations - Invalid abbreviation casing
  `// PluginSlugRequest is the request body for plugin-slug-only API calls.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 24**: abbreviations - Invalid abbreviation casing
  `// PluginFileRequest is the request body for single-file read API calls.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 26**: abbreviations - Invalid abbreviation casing
  `Plugin string `json:"plugin"` // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 30**: abbreviations - Invalid abbreviation casing
  `// PluginFileDeleteRequest is the request body for file deletion API calls.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 32**: abbreviations - Invalid abbreviation casing
  `Plugin string `json:"plugin"` // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 37**: abbreviations - Invalid abbreviation casing
  `// PluginFileReplaceRequest is the request body for file replacement API calls.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 39**: abbreviations - Invalid abbreviation casing
  `Plugin  string `json:"plugin"`  // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 44**: abbreviations - Invalid abbreviation casing
  `// SyncRequestBody is the request body for delta sync API calls.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 46**: abbreviations - Invalid abbreviation casing
  `Plugin string     `json:"plugin"` // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

