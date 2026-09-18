# Subtask 575: Fix violations in wp-plugins/riseup-asia-uploader/includes/ErrorHandling/FatalErrorHandler.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/ErrorHandling/FatalErrorHandler.php`

## Violations

- **Line 3**: abbreviations - Invalid abbreviation casing
  `* FatalErrorHandler — Detects fatal PHP errors during REST requests and emits structured JSON.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 5**: abbreviations - Invalid abbreviation casing
  `* Registers a shutdown function to catch fatal errors and return proper JSON`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 27**: abbreviations - Invalid abbreviation casing
  `* Detects fatal PHP errors during REST requests and emits structured JSON responses.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 174**: abbreviations - Invalid abbreviation casing
  `'message' => 'Fatal error occurred and JSON encoding also failed',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

