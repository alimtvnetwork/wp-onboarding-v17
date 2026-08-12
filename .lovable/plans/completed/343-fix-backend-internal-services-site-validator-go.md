# Subtask 343: Fix violations in backend/internal/services/site/Validator.go

Target File: `backend/internal/services/site/Validator.go`

## Violations

- **Line 16**: abbreviations - Invalid abbreviation casing
  `// URL must start with http:// or https://`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 20**: abbreviations - Invalid abbreviation casing
  `// ValidateSiteUrl validates a WordPress site URL`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 26**: abbreviations - Invalid abbreviation casing
  `return apperror.New(apperror.ErrValidation, "URL is required")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 38**: abbreviations - Invalid abbreviation casing
  `return apperror.Wrap(err, apperror.ErrValidation, "invalid URL format")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 44**: abbreviations - Invalid abbreviation casing
  `return apperror.New(apperror.ErrValidation, "URL must include a host")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 49**: abbreviations - Invalid abbreviation casing
  `return apperror.New(apperror.ErrValidation, "URL should not include /wp-admin")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

