# Subtask 062: Fix violations in backend/internal/enums/connectionstatustype/Variant.go

Target File: `backend/internal/enums/connectionstatustype/Variant.go`

## Violations

- **Line 81**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid connection status: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

