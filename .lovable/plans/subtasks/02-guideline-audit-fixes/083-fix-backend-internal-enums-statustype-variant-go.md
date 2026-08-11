# Subtask 083: Fix violations in backend/internal/enums/statustype/Variant.go

Target File: `backend/internal/enums/statustype/Variant.go`

## Violations

- **Line 76**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid status: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

