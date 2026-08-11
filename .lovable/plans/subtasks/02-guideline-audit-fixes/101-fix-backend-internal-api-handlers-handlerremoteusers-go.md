# Subtask 101: Fix violations in backend/internal/api/handlers/HandlerRemoteUsers.go

Target File: `backend/internal/api/handlers/HandlerRemoteUsers.go`

## Violations

- **Line 18**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, siteId int64, query string) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 210**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, siteId int64, query string) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 218**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, siteId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 31**: abbreviations - Invalid abbreviation casing
  `respondBadRequest(w, apperror.ErrConfigParse, "Invalid site ID")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 39**: abbreviations - Invalid abbreviation casing
  `respondBadRequest(w, apperror.ErrConfigParse, "User ID is required")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 60**: abbreviations - Invalid abbreviation casing
  `respondBadRequest(w, apperror.ErrConfigParse, "Invalid site ID")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 89**: abbreviations - Invalid abbreviation casing
  `respondBadRequest(w, apperror.ErrConfigParse, "Invalid site ID")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 97**: abbreviations - Invalid abbreviation casing
  `respondBadRequest(w, apperror.ErrConfigParse, "User ID is required")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 126**: abbreviations - Invalid abbreviation casing
  `respondBadRequest(w, apperror.ErrConfigParse, "Invalid site ID")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 134**: abbreviations - Invalid abbreviation casing
  `respondBadRequest(w, apperror.ErrConfigParse, "User ID is required")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 138**: abbreviations - Invalid abbreviation casing
  `reassign := r.URL.Query().Get("reassign")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 157**: abbreviations - Invalid abbreviation casing
  `respondBadRequest(w, apperror.ErrConfigParse, "Invalid site ID")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 186**: abbreviations - Invalid abbreviation casing
  `respondBadRequest(w, apperror.ErrConfigParse, "Invalid site ID")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

