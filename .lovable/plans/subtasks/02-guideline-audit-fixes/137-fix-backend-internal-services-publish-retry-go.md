# Subtask 137: Fix violations in backend/internal/services/publish/Retry.go

Target File: `backend/internal/services/publish/Retry.go`

## Violations

- **Line 44**: go-loose-types - Type erasure (any/interface{})
  `func withRetry[T any](ctx context.Context, cfg RetryConfig, operation string, fn func(attempt int) (T, *apperror.AppError)) (T, RetryResult) {`
  **Instruction**: Replace any/interface{} with a concrete type.

