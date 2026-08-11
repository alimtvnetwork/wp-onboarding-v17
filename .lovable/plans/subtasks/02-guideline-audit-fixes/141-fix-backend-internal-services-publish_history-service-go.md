# Subtask 141: Fix violations in backend/internal/services/publish_history/Service.go

Target File: `backend/internal/services/publish_history/Service.go`

## Violations

- **Line 93**: go-loose-types - Type erasure (any/interface{})
  `func (s *Service) countHistory(where string, args []any) (int, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 107**: go-loose-types - Type erasure (any/interface{})
  `func (s *Service) queryHistoryPage(where string, args []any, limit, offset int) ([]models.PublishHistory, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 179**: go-loose-types - Type erasure (any/interface{})
  `func buildWhereClause(f models.PublishHistoryFilters) (string, []any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 181**: go-loose-types - Type erasure (any/interface{})
  `var args []any`
  **Instruction**: Replace any/interface{} with a concrete type.

