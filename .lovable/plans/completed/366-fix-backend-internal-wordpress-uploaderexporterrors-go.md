# Subtask 366: Fix violations in backend/internal/wordpress/UploaderExportErrors.go

Target File: `backend/internal/wordpress/UploaderExportErrors.go`

## Violations

- **Line 21**: abbreviations - Invalid abbreviation casing
  `Exists     bool   `json:"exists"`     // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 33**: abbreviations - Invalid abbreviation casing
  `Success          bool                 `json:"success"`                    // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 74**: abbreviations - Invalid abbreviation casing
  `ID               int                  `json:"id"`                        // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 88**: abbreviations - Invalid abbreviation casing
  `LastSeenId  int  `json:"last_seen_id"`  // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 95**: abbreviations - Invalid abbreviation casing
  `Success          bool                      `json:"success"`                    // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 163**: abbreviations - Invalid abbreviation casing
  `// buildErrorSessionsEndpoint constructs the endpoint URL with query parameters.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

