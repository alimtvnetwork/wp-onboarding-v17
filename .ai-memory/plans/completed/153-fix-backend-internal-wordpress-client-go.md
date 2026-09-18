# Subtask 153: Fix violations in backend/internal/wordpress/Client.go

Target File: `backend/internal/wordpress/Client.go`

## Violations

- **Line 100**: go-loose-types - Type erasure (any/interface{})
  `func marshalBody(body any) (io.Reader, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 116**: go-loose-types - Type erasure (any/interface{})
  `func (c *Client) request(method, endpoint string, body any) (*http.Response, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package wordpress provides a client for the WordPress REST API`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 51**: abbreviations - Invalid abbreviation casing
  `// Client is a WordPress REST API client`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 61**: abbreviations - Invalid abbreviation casing
  `// NewClient creates a new WordPress API client`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 99**: abbreviations - Invalid abbreviation casing
  `// marshalBody encodes the body to JSON if non-nil.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 115**: abbreviations - Invalid abbreviation casing
  `// request makes an authenticated HTTP request to the WordPress API`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 181**: abbreviations - Invalid abbreviation casing
  `// rawGet performs an authenticated GET request to an arbitrary full URL on the same WordPress host.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] SKIPPED (False Positive)
