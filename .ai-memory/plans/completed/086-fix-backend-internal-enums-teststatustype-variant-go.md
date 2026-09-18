# Subtask 086: Fix violations in backend/internal/enums/teststatustype/Variant.go

Target File: `backend/internal/enums/teststatustype/Variant.go`

## Violations

- **Line 86**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid test status: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().


[x] FIXED
