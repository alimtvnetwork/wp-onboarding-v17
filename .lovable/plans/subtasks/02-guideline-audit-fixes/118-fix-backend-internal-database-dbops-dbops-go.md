# Subtask 118: Fix violations in backend/internal/database/dbops/Dbops.go

Target File: `backend/internal/database/dbops/Dbops.go`

## Violations

- **Line 12**: go-loose-types - Type erasure (any/interface{})
  `func ExecInsert(db interface{ Exec(string, ...any) (sql.Result, error) }, ctx Context, query string, args ...any) (*Result, error) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 39**: go-loose-types - Type erasure (any/interface{})
  `func ExecUpdate(db interface{ Exec(string, ...any) (sql.Result, error) }, ctx Context, query string, args ...any) (*Result, error) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 59**: go-loose-types - Type erasure (any/interface{})
  `func ExecDelete(db interface{ Exec(string, ...any) (sql.Result, error) }, ctx Context, query string, args ...any) (*Result, error) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 87**: go-loose-types - Type erasure (any/interface{})
  `QueryRow(string, ...any) *sql.Row`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 88**: go-loose-types - Type erasure (any/interface{})
  `Exec(string, ...any) (sql.Result, error)`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 92**: go-loose-types - Type erasure (any/interface{})
  `selectArgs []any,`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 94**: go-loose-types - Type erasure (any/interface{})
  `insertArgs []any,`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 175**: go-loose-types - Type erasure (any/interface{})
  `db interface{ Exec(string, ...any) (sql.Result, error) },`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 178**: go-loose-types - Type erasure (any/interface{})
  `args ...any,`
  **Instruction**: Replace any/interface{} with a concrete type.

