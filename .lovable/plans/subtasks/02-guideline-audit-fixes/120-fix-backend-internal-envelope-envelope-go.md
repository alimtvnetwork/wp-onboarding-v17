# Subtask 120: Fix violations in backend/internal/envelope/Envelope.go

Target File: `backend/internal/envelope/Envelope.go`

## Violations

- **Line 15**: go-loose-types - Type erasure (any/interface{})
  `type Response[T any] struct {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 66**: go-loose-types - Type erasure (any/interface{})
  `RequestBody        any      `json:",omitempty"``
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 67**: go-loose-types - Type erasure (any/interface{})
  `Response           any      `json:",omitempty"``
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 138**: go-loose-types - Type erasure (any/interface{})
  `func Success[T any](data T) Response[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 157**: go-loose-types - Type erasure (any/interface{})
  `func Created[T any](data T) Response[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 195**: go-loose-types - Type erasure (any/interface{})
  `func List[T any](data []T, pg Pagination, requestPath string) Response[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 203**: go-loose-types - Type erasure (any/interface{})
  `func newListResponse[T any](data []T, pg Pagination) Response[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 225**: go-loose-types - Type erasure (any/interface{})
  `func ListUnpaginated[T any](data []T, count int) Response[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package envelope provides a universal response envelope for all API responses.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 12**: abbreviations - Invalid abbreviation casing
  `// Response is the universal API response envelope, generic over the Results element type.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 14**: abbreviations - Invalid abbreviation casing
  `// Optional sections use pointers with omitempty so they are absent from JSON when nil.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 50**: abbreviations - Invalid abbreviation casing
  `// Navigation provides pagination URL links for list responses.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 64**: abbreviations - Invalid abbreviation casing
  `Namespace          string   `json:",omitempty"` // WordPress REST API namespace (e.g. "riseup-asia-api/v1")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 192**: abbreviations - Invalid abbreviation casing
  `// List creates a paginated list response with navigation URL links.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 194**: abbreviations - Invalid abbreviation casing
  `// requestPath is the base URL path (e.g., "/api/v1/plugins") used to generate navigation URLs.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

