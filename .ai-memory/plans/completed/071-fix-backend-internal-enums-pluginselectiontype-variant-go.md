# Subtask 071: Fix violations in backend/internal/enums/pluginselectiontype/Variant.go

Target File: `backend/internal/enums/pluginselectiontype/Variant.go`

## Violations

- **Line 74**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid plugin selection: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().


[x] FIXED
