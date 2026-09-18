# Subtask 065: Fix violations in backend/internal/enums/endpointtype/VariantMethods.go

Target File: `backend/internal/enums/endpointtype/VariantMethods.go`

## Violations

- **Line 109**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid endpoint: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

[x] FIXED
