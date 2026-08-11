# Subtask 129: Fix violations in backend/internal/services/e2e/ServiceQueries.go

Target File: `backend/internal/services/e2e/ServiceQueries.go`

## Violations

- **Line 28**: go-loose-types - Type erasure (any/interface{})
  `Scan(dest ...any) error`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 77**: go-loose-types - Type erasure (any/interface{})
  `Scan(dest ...any) error`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 93**: go-loose-types - Type erasure (any/interface{})
  `func scanSingleCase(row interface{ Scan(dest ...any) error }) (TestCase, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 170**: go-loose-types - Type erasure (any/interface{})
  `Scan(dest ...any) error`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 236**: go-loose-types - Type erasure (any/interface{})
  `Scan(dest ...any) error`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 123**: abbreviations - Invalid abbreviation casing
  `return apperror.New(apperror.ErrNotFound, "no active run with ID").WithRunId(runId)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 206**: abbreviations - Invalid abbreviation casing
  `// loadRun fetches a single run record by ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] SKIPPED (False Positive)
