# Subtask 169: Fix violations in backend/pkg/apperror/ErrorDiagnostic.go

Target File: `backend/pkg/apperror/ErrorDiagnostic.go`

## Violations

- **Line 33**: go-loose-types - Type erasure (any/interface{})
  `// HasFields returns true if any diagnostic field is populated.`
  **Instruction**: Replace any/interface{} with a concrete type.

