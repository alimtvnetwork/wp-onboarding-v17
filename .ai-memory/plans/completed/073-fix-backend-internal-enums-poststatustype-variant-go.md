# Subtask 073: Fix violations in backend/internal/enums/poststatustype/Variant.go

Target File: `backend/internal/enums/poststatustype/Variant.go`

## Violations

- **Line 79**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid post status: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().


[x] FIXED
