# Subtask 059: Fix violations in backend/internal/enums/actiontype/Variant.go

Target File: `backend/internal/enums/actiontype/Variant.go`

## Violations

- **Line 142**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid action: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 87**: go-loose-types - Type erasure (any/interface{})
  `// IsAnyOf returns true if the receiver matches any of the given variants.`
  **Instruction**: Replace any/interface{} with a concrete type.

