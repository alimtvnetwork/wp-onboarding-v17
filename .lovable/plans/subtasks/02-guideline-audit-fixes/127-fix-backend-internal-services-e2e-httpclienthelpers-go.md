# Subtask 127: Fix violations in backend/internal/services/e2e/HttpClientHelpers.go

Target File: `backend/internal/services/e2e/HttpClientHelpers.go`

## Violations

- **Line 14**: go-loose-types - Type erasure (any/interface{})
  `func (c *apiClient) do(method, path string, body any) (*apiResponse, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 32**: go-loose-types - Type erasure (any/interface{})
  `func (c *apiClient) buildRequest(method, path string, body any) (*http.Request, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 31**: abbreviations - Invalid abbreviation casing
  `// buildRequest creates an http.Request with optional JSON body.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 58**: abbreviations - Invalid abbreviation casing
  `// parseResponse reads the response body and parses the JSON envelope.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

