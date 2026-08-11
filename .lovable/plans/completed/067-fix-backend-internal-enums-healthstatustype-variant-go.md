# Subtask 067: Fix violations in backend/internal/enums/healthstatustype/Variant.go

Target File: `backend/internal/enums/healthstatustype/Variant.go`

## Violations

- **Line 87**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid health status: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 39**: abbreviations - Invalid abbreviation casing
  `// DBValue returns the lowercase value used in database storage and JSON responses.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] FIXED
