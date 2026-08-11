# Subtask 063: Fix violations in backend/internal/enums/connectionsteptype/Variant.go

Target File: `backend/internal/enums/connectionsteptype/Variant.go`

## Violations

- **Line 117**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid connection step: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

