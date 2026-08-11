# Subtask 075: Fix violations in backend/internal/enums/publishtype/Variant.go

Target File: `backend/internal/enums/publishtype/Variant.go`

## Violations

- **Line 92**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid publish type: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().


[x] FIXED
