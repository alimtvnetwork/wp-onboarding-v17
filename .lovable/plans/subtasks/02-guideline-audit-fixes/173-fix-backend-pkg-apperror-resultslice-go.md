# Subtask 173: Fix violations in backend/pkg/apperror/ResultSlice.go

Target File: `backend/pkg/apperror/ResultSlice.go`

## Violations

- **Line 6**: go-loose-types - Type erasure (any/interface{})
  `type ResultSlice[T any] struct {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 12**: go-loose-types - Type erasure (any/interface{})
  `func OkSlice[T any](items []T) ResultSlice[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 17**: go-loose-types - Type erasure (any/interface{})
  `func FailSlice[T any](err *AppError) ResultSlice[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 23**: go-loose-types - Type erasure (any/interface{})
  `func FailSliceWrap[T any](cause error, code ErrorCode, message string) ResultSlice[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 28**: go-loose-types - Type erasure (any/interface{})
  `func FailSliceNew[T any](code ErrorCode, message string) ResultSlice[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

