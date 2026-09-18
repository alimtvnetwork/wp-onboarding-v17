# Subtask 081: Fix violations in backend/internal/enums/snapshotmodetype/Variant.go

Target File: `backend/internal/enums/snapshotmodetype/Variant.go`

## Violations

- **Line 74**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid snapshot mode: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

[x] FIXED

