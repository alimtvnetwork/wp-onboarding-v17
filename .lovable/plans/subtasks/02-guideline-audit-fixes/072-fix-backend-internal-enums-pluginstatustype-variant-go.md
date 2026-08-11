# Subtask 072: Fix violations in backend/internal/enums/pluginstatustype/Variant.go

Target File: `backend/internal/enums/pluginstatustype/Variant.go`

## Violations

- **Line 76**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid plugin status: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

