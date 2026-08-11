# Subtask 166: Fix violations in backend/internal/ws/HubBroadcast.go

Target File: `backend/internal/ws/HubBroadcast.go`

## Violations

- **Line 134**: go-loose-types - Type erasure (any/interface{})
  `// This replaces the old untyped BroadcastWithSession(eventType, data any, sessionId) method.`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 135**: go-loose-types - Type erasure (any/interface{})
  `func BroadcastTypedWithSession[T any](h *Hub, eventType string, data T, sessionId string) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 59**: abbreviations - Invalid abbreviation casing
  `// BroadcastOperationLogWithSession sends a detailed operation log entry with session ID`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 133**: abbreviations - Invalid abbreviation casing
  `// BroadcastTypedWithSession sends a typed event with session ID using the generic BroadcastWithSession function.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 144**: abbreviations - Invalid abbreviation casing
  `// BroadcastRemoteActionStarted sends a remote plugin action started event with session ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 149**: abbreviations - Invalid abbreviation casing
  `// BroadcastRemoteActionComplete sends a remote plugin action complete event with session ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

