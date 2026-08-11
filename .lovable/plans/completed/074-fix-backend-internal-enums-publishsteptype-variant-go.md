# Subtask 074: Fix violations in backend/internal/enums/publishsteptype/Variant.go

Target File: `backend/internal/enums/publishsteptype/Variant.go`

## Violations

- **Line 184**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid publish step: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().


[x] FIXED
