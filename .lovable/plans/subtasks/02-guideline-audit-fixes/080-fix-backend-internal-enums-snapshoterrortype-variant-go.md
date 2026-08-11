# Subtask 080: Fix violations in backend/internal/enums/snapshoterrortype/Variant.go

Target File: `backend/internal/enums/snapshoterrortype/Variant.go`

## Violations

- **Line 117**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid snapshot error: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

