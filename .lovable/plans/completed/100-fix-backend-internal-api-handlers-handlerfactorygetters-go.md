# Subtask 100: Fix violations in backend/internal/api/handlers/HandlerFactoryGetters.go

Target File: `backend/internal/api/handlers/HandlerFactoryGetters.go`

## Violations

- **Line 71**: go-loose-types - Type erasure (any/interface{})
  `// These replace the legacy func() any wrappers.`
  **Instruction**: Replace any/interface{} with a concrete type.

[x] SKIPPED (False Positive)
