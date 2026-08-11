# Subtask 164: Fix violations in backend/internal/ws/EventTypes.go

Target File: `backend/internal/ws/EventTypes.go`

## Violations

- **Line 3**: go-loose-types - Type erasure (any/interface{})
  `// instead of map[string]any literals, per the Generic Enforce Pattern (GE-1).`
  **Instruction**: Replace any/interface{} with a concrete type.

[x] SKIPPED (False Positive)
