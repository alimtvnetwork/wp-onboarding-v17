# Subtask 125: Fix violations in backend/internal/services/backup/DetailTypes.go

Target File: `backend/internal/services/backup/DetailTypes.go`

## Violations

- **Line 2**: go-loose-types - Type erasure (any/interface{})
  `// These replace inline map[string]any literals at call sites,`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 9**: go-loose-types - Type erasure (any/interface{})
  `func toDetails[T any](v T) json.RawMessage {`
  **Instruction**: Replace any/interface{} with a concrete type.

