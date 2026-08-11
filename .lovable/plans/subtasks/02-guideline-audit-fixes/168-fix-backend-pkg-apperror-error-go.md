# Subtask 168: Fix violations in backend/pkg/apperror/Error.go

Target File: `backend/pkg/apperror/Error.go`

## Violations

- **Line 127**: go-loose-types - Type erasure (any/interface{})
  `// HasDiagnostic returns true if any diagnostic field is set.`
  **Instruction**: Replace any/interface{} with a concrete type.

