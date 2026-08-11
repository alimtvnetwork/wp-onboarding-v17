# Subtask 105: Fix violations in backend/internal/api/handlers/Response.go

Target File: `backend/internal/api/handlers/Response.go`

## Violations

- **Line 21**: go-loose-types - Type erasure (any/interface{})
  `func respondJson(w http.ResponseWriter, status int, data any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 29**: go-loose-types - Type erasure (any/interface{})
  `func respondSuccess[T any](w http.ResponseWriter, data T) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 35**: go-loose-types - Type erasure (any/interface{})
  `func respondCreated[T any](w http.ResponseWriter, data T) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 182**: go-loose-types - Type erasure (any/interface{})
  `func respondList[T any](`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 193**: go-loose-types - Type erasure (any/interface{})
  `func respondListUnpaginated[T any](w http.ResponseWriter, data []T, count int) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 207**: go-loose-types - Type erasure (any/interface{})
  `func isServiceMissing(w http.ResponseWriter, service any, name string) bool {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 244**: go-loose-types - Type erasure (any/interface{})
  `func isBodyInvalid(w http.ResponseWriter, r *http.Request, target any) bool {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 280**: go-loose-types - Type erasure (any/interface{})
  `func decodeJsonSilent(r *http.Request, target any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package handlers provides shared response helpers for HTTP API handlers.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 20**: abbreviations - Invalid abbreviation casing
  `// respondJson writes a raw JSON response (used only for non-envelope responses like file downloads)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 122**: abbreviations - Invalid abbreviation casing
  `// extractNamespaceFromEndpoint parses the REST API namespace from a WordPress endpoint path.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 150**: abbreviations - Invalid abbreviation casing
  `// respondErrorWithSession writes an error envelope with session ID and stack traces.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 181**: abbreviations - Invalid abbreviation casing
  `// requestPath is the base URL path used to generate navigation URLs.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 197**: abbreviations - Invalid abbreviation casing
  `// getIdParam extracts an ID parameter from the URL`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 242**: abbreviations - Invalid abbreviation casing
  `// isBodyInvalid decodes a JSON request body into target. Returns true and writes`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 261**: abbreviations - Invalid abbreviation casing
  `// parseId extracts a URL path param as int64. Returns false and writes 400 on failure.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 278**: abbreviations - Invalid abbreviation casing
  `// decodeJsonSilent decodes a JSON request body without writing an error response.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] FIXED
[x] SKIPPED (False Positive)
