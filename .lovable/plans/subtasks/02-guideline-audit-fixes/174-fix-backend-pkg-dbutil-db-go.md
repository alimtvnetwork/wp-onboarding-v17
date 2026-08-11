# Subtask 174: Fix violations in backend/pkg/dbutil/Db.go

Target File: `backend/pkg/dbutil/Db.go`

## Violations

- **Line 27**: go-loose-types - Type erasure (any/interface{})
  `func (d *DB) QueryRowContext(ctx context.Context, query string, args ...any) *sql.Row {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 32**: go-loose-types - Type erasure (any/interface{})
  `func (d *DB) QueryContext(ctx context.Context, query string, args ...any) (*sql.Rows, error) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 37**: go-loose-types - Type erasure (any/interface{})
  `func (d *DB) ExecContext(ctx context.Context, query string, args ...any) (sql.Result, error) {`
  **Instruction**: Replace any/interface{} with a concrete type.

