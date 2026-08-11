# Subtask 061: Fix violations in backend/internal/enums/changetype/Variant.go

Target File: `backend/internal/enums/changetype/Variant.go`

## Violations

- **Line 71**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid change type: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

