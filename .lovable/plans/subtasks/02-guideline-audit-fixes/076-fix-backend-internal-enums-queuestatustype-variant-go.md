# Subtask 076: Fix violations in backend/internal/enums/queuestatustype/Variant.go

Target File: `backend/internal/enums/queuestatustype/Variant.go`

## Violations

- **Line 86**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid queue status: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

