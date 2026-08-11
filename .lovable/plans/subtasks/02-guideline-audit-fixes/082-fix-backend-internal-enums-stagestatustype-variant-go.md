# Subtask 082: Fix violations in backend/internal/enums/stagestatustype/Variant.go

Target File: `backend/internal/enums/stagestatustype/Variant.go`

## Violations

- **Line 92**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid stage status: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

