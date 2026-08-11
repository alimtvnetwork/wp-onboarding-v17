# Subtask 143: Fix violations in backend/internal/services/session/StackCapture.go

Target File: `backend/internal/services/session/StackCapture.go`

## Violations

- **Line 77**: go-loose-types - Type erasure (any/interface{})
  `// hasExcludedPrefix checks if the function name starts with any excluded prefix.`
  **Instruction**: Replace any/interface{} with a concrete type.

