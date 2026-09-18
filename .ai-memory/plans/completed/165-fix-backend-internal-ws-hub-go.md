# Subtask 165: Fix violations in backend/internal/ws/Hub.go

Target File: `backend/internal/ws/Hub.go`

## Violations

- **Line 57**: go-loose-types - Type erasure (any/interface{})
  `Data      any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 238**: go-loose-types - Type erasure (any/interface{})
  `type BroadcastInput[T any] struct {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 246**: go-loose-types - Type erasure (any/interface{})
  `func Broadcast[T any](h *Hub, eventType string, data T) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 255**: go-loose-types - Type erasure (any/interface{})
  `func BroadcastWithSession[T any](input BroadcastInput[T]) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 254**: abbreviations - Invalid abbreviation casing
  `// BroadcastWithSession sends a typed message with an optional session ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] FIXED
