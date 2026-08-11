# Subtask 171: Fix violations in backend/pkg/apperror/Result.go

Target File: `backend/pkg/apperror/Result.go`

## Violations

- **Line 5**: go-loose-types - Type erasure (any/interface{})
  `type Result[T any] struct {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 12**: go-loose-types - Type erasure (any/interface{})
  `func Ok[T any](value T) Result[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 17**: go-loose-types - Type erasure (any/interface{})
  `func Fail[T any](err *AppError) Result[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 23**: go-loose-types - Type erasure (any/interface{})
  `func FailWrap[T any](cause error, code ErrorCode, message string) Result[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 31**: go-loose-types - Type erasure (any/interface{})
  `func FailNew[T any](code ErrorCode, message string) Result[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

