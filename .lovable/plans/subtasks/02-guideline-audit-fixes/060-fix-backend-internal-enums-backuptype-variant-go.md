# Subtask 060: Fix violations in backend/internal/enums/backuptype/Variant.go

Target File: `backend/internal/enums/backuptype/Variant.go`

## Violations

- **Line 74**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid backup type: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

