# Subtask 134: Fix violations in backend/internal/services/plugin/CrudUpdate.go

Target File: `backend/internal/services/plugin/CrudUpdate.go`

## Violations

- **Line 40**: go-loose-types - Type erasure (any/interface{})
  `func (s *Service) buildUpdateFields(ctx context.Context, input UpdateInput) ([]string, []any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 42**: go-loose-types - Type erasure (any/interface{})
  `var args []any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 65**: go-loose-types - Type erasure (any/interface{})
  `func appendOptionalFields(updates *[]string, args *[]any, input UpdateInput) {`
  **Instruction**: Replace any/interface{} with a concrete type.

