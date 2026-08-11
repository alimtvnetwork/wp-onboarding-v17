# Subtask 176: Fix violations in backend/pkg/dbutil/Query.go

Target File: `backend/pkg/dbutil/Query.go`

## Violations

- **Line 11**: go-loose-types - Type erasure (any/interface{})
  `type RowScanner[T any] func(*sql.Row) (T, error)`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 14**: go-loose-types - Type erasure (any/interface{})
  `type RowsScanner[T any] func(*sql.Rows) (T, error)`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 18**: go-loose-types - Type erasure (any/interface{})
  `func QueryOne[T any](ctx context.Context, db *DB, query string, scan RowScanner[T], args ...any) Result[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 33**: go-loose-types - Type erasure (any/interface{})
  `func QueryMany[T any](ctx context.Context, db *DB, query string, scan RowsScanner[T], args ...any) ResultSet[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 45**: go-loose-types - Type erasure (any/interface{})
  `func collectRows[T any](rows *sql.Rows, scan RowsScanner[T]) ResultSet[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

