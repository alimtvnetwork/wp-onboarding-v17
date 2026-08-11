# Subtask 077: Fix violations in backend/internal/enums/responsekeytype/VariantMethods.go

Target File: `backend/internal/enums/responsekeytype/VariantMethods.go`

## Violations

- **Line 86**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return Invalid, fmt.Errorf("invalid response key: %q", s)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 40**: go-loose-types - Type erasure (any/interface{})
  `// IsAnyOf returns true if the receiver matches any of the given variants.`
  **Instruction**: Replace any/interface{} with a concrete type.

