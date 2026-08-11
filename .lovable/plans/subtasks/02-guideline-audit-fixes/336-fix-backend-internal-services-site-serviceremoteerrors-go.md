# Subtask 336: Fix violations in backend/internal/services/site/ServiceRemoteErrors.go

Target File: `backend/internal/services/site/ServiceRemoteErrors.go`

## Violations

- **Line 27**: abbreviations - Invalid abbreviation casing
  `// extractErrorDetails extracts PHP stack trace frames and other details from WordPress API errors.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 47**: abbreviations - Invalid abbreviation casing
  `// populateApiErrorFields copies API error fields into the details struct.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 53**: abbreviations - Invalid abbreviation casing
  `// copyRequiredApiFields copies the always-present API error fields.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 63**: abbreviations - Invalid abbreviation casing
  `// copyOptionalApiFields copies conditionally-present API error fields.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 84**: abbreviations - Invalid abbreviation casing
  `// parseErrorResponseEnvelope parses the JSON response body for structured error details.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

