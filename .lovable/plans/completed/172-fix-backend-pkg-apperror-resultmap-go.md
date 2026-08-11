# Subtask 172: Fix violations in backend/pkg/apperror/ResultMap.go

Target File: `backend/pkg/apperror/ResultMap.go`

## Violations

- **Line 6**: go-loose-types - Type erasure (any/interface{})
  `type ResultMap[K comparable, V any] struct {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 12**: go-loose-types - Type erasure (any/interface{})
  `func OkMap[K comparable, V any](items map[K]V) ResultMap[K, V] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 17**: go-loose-types - Type erasure (any/interface{})
  `func FailMap[K comparable, V any](err *AppError) ResultMap[K, V] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 23**: go-loose-types - Type erasure (any/interface{})
  `func FailMapWrap[K comparable, V any](cause error, code ErrorCode, message string) ResultMap[K, V] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 28**: go-loose-types - Type erasure (any/interface{})
  `func FailMapNew[K comparable, V any](code ErrorCode, message string) ResultMap[K, V] {`
  **Instruction**: Replace any/interface{} with a concrete type.

[x] SKIPPED (False Positive)
