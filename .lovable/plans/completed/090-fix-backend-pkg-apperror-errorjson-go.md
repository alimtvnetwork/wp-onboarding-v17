# Subtask 090: Fix violations in backend/pkg/apperror/ErrorJson.go

Target File: `backend/pkg/apperror/ErrorJson.go`

## Violations

- **Line 43**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return fmt.Errorf("apperror.UnmarshalJSON: failed to decode AppError (received %d bytes: %s): %w", len(data), truncateData(data, 200), err)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 8**: abbreviations - Invalid abbreviation casing
  `// appErrorJson is an alias used to prevent infinite recursion during JSON marshaling.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 19**: abbreviations - Invalid abbreviation casing
  `// MarshalJSON serializes AppError to JSON, converting Cause to a string message.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 37**: abbreviations - Invalid abbreviation casing
  `// UnmarshalJSON deserializes JSON into AppError, restoring Cause as a plain error.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 60**: abbreviations - Invalid abbreviation casing
  `// truncateData returns a string preview of raw JSON data, capped at maxLen bytes.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] FIXED
