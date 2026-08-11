# Subtask 088: Fix violations in backend/internal/services/error_history/ServiceQuery.go

Target File: `backend/internal/services/error_history/ServiceQuery.go`

## Violations

- **Line 164**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return 0, fmt.Errorf("threshold too short: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 173**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return 0, fmt.Errorf("invalid threshold number: %q", value)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 182**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return 0, fmt.Errorf("unsupported threshold unit %q, use 'h' or 'd'", string(unit))`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 14**: abbreviations - Invalid abbreviation casing
  `// GetById returns a single error by ID`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 72**: abbreviations - Invalid abbreviation casing
  `// GetByErrorId returns a single error by its frontend-generated error ID`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 86**: abbreviations - Invalid abbreviation casing
  `appErr := apperror.Wrap(err, apperror.ErrDatabaseQuery, "query error by error ID").`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

