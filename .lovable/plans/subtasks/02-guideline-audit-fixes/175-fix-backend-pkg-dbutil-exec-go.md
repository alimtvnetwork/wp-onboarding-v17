# Subtask 175: Fix violations in backend/pkg/dbutil/Exec.go

Target File: `backend/pkg/dbutil/Exec.go`

## Violations

- **Line 34**: go-loose-types - Type erasure (any/interface{})
  `func Exec(ctx context.Context, db *DB, query string, args ...any) ExecResult {`
  **Instruction**: Replace any/interface{} with a concrete type.

