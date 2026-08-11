# Subtask 084: Fix violations in backend/internal/enums/syncdirectiontype/Variant.go

Target File: `backend/internal/enums/syncdirectiontype/Variant.go`

## Violations

- **Line 74**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid sync direction: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

