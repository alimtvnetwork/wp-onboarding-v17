# Subtask 079: Fix violations in backend/internal/enums/scantriggertype/Variant.go

Target File: `backend/internal/enums/scantriggertype/Variant.go`

## Violations

- **Line 68**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid scan trigger: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

[x] FIXED

