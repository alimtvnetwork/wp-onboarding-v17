# Subtask 066: Fix violations in backend/internal/enums/headertype/Variant.go

Target File: `backend/internal/enums/headertype/Variant.go`

## Violations

- **Line 113**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid header: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

