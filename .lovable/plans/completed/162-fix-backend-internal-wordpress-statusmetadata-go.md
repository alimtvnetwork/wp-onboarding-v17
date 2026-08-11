# Subtask 162: Fix violations in backend/internal/wordpress/StatusMetadata.go

Target File: `backend/internal/wordpress/StatusMetadata.go`

## Violations

- **Line 53**: go-loose-types - Type erasure (any/interface{})
  `var body any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 78**: go-loose-types - Type erasure (any/interface{})
  `func getStatusPayload(body any) any {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 79**: go-loose-types - Type erasure (any/interface{})
  `obj, ok := body.(map[string]any)`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 86**: go-loose-types - Type erasure (any/interface{})
  `case []any:`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 102**: go-loose-types - Type erasure (any/interface{})
  `func getStatusString(obj any, keys ...string) string {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 103**: go-loose-types - Type erasure (any/interface{})
  `mapped, ok := obj.(map[string]any)`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 120**: go-loose-types - Type erasure (any/interface{})
  `func formatStatusValue(value any) string {`
  **Instruction**: Replace any/interface{} with a concrete type.

[x] FIXED
