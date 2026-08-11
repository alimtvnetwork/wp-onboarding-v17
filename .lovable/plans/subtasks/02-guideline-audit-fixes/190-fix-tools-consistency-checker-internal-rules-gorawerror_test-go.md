# Subtask 190: Fix violations in tools/consistency-checker/internal/rules/GoRawError_test.go

Target File: `tools/consistency-checker/internal/rules/GoRawError_test.go`

## Violations

- **Line 185**: go-loose-types - Type erasure (any/interface{})
  ``func ExecInsert(db interface{ Exec(string, ...any) (sql.Result, error) }, ctx Context, query string, args ...any) (*Result, error) {`,`
  **Instruction**: Replace any/interface{} with a concrete type.

