# Subtask 085: Fix violations in backend/internal/enums/syncsteptype/Variant.go

Target File: `backend/internal/enums/syncsteptype/Variant.go`

## Violations

- **Line 83**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid sync step: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

