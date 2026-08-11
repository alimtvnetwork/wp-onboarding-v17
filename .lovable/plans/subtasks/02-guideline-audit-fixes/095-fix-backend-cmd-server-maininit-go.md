# Subtask 095: Fix violations in backend/cmd/server/MainInit.go

Target File: `backend/cmd/server/MainInit.go`

## Violations

- **Line 83**: go-loose-types - Type erasure (any/interface{})
  `Broadcast:        func(event string, data any) { ws.Broadcast(input.WSHub, event, data) },`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 157**: abbreviations - Invalid abbreviation casing
  `// printStartupBanner prints the server URL info.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

