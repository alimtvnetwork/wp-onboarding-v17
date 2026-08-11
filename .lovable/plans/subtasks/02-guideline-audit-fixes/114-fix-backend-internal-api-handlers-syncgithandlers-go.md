# Subtask 114: Fix violations in backend/internal/api/handlers/SyncGitHandlers.go

Target File: `backend/internal/api/handlers/SyncGitHandlers.go`

## Violations

- **Line 23**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, pluginId, siteId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 36**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, pluginId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 50**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, pluginId, siteId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 65**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, pluginId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 77**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 90**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, pluginId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 147**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, pluginId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

