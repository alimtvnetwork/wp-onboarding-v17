# Subtask 087: Fix violations in backend/internal/enums/uploadsourcetype/Variant.go

Target File: `backend/internal/enums/uploadsourcetype/Variant.go`

## Violations

- **Line 82**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid upload source: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().


[x] FIXED
