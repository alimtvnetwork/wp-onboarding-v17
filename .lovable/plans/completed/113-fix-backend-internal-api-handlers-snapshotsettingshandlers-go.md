# Subtask 113: Fix violations in backend/internal/api/handlers/SnapshotSettingsHandlers.go

Target File: `backend/internal/api/handlers/SnapshotSettingsHandlers.go`

## Violations

- **Line 15**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, siteId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 49**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, siteId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 56**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, siteId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.


[x] FIXED
