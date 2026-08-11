# Subtask 154: Fix violations in backend/internal/wordpress/ClientApiCall.go

Target File: `backend/internal/wordpress/ClientApiCall.go`

## Violations

- **Line 19**: go-loose-types - Type erasure (any/interface{})
  `Body       any`
  **Instruction**: Replace any/interface{} with a concrete type.
  [x] SKIPPED (False Positive)

- **Line 141**: go-loose-types - Type erasure (any/interface{})
  `func DoApiCall[T any](c *Client, input ApiCallInput) apperror.Result[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.
  [x] SKIPPED (False Positive)

- **Line 151**: go-loose-types - Type erasure (any/interface{})
  `func decodeApiResponse[T any](data []byte, operationDesc string) apperror.Result[T] {`
  **Instruction**: Replace any/interface{} with a concrete type.
  [x] SKIPPED (False Positive)

- **Line 15**: abbreviations - Invalid abbreviation casing
  `// ApiCallInput holds common parameters for a WordPress REST API call.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).
  [x] SKIPPED (False Positive)

- **Line 26**: abbreviations - Invalid abbreviation casing
  `// ApiCallResponse holds the raw body and status code from an API call.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).
  [x] SKIPPED (False Positive)

- **Line 103**: abbreviations - Invalid abbreviation casing
  `// buildCallError constructs an AppError from a failed API call, wrapping the structured ApiError.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).
  [x] SKIPPED (False Positive)

- **Line 140**: abbreviations - Invalid abbreviation casing
  `// DoApiCall sends a request, checks status, and JSON-decodes the response into T.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).
  [x] SKIPPED (False Positive)

- **Line 150**: abbreviations - Invalid abbreviation casing
  `// decodeApiResponse unmarshals raw JSON bytes into T.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).
  [x] SKIPPED (False Positive)

- **Line 152**: abbreviations - Invalid abbreviation casing
  `// Guard against HTML before JSON decode — clearer than "invalid character '<'"`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).
  [x] SKIPPED (False Positive)

- **Line 167**: abbreviations - Invalid abbreviation casing
  `// detectHtmlResponse checks if response bytes look like HTML instead of JSON,`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).
  [x] SKIPPED (False Positive)

- **Line 168**: abbreviations - Invalid abbreviation casing
  `// which indicates the WordPress REST API namespace/endpoint is not registered.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).
  [x] SKIPPED (False Positive)

- **Line 186**: abbreviations - Invalid abbreviation casing
  `msg := "received HTML instead of JSON — the REST API endpoint is not registered on this WordPress site"`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).
  [x] SKIPPED (False Positive)

- **Line 190**: abbreviations - Invalid abbreviation casing
  `msg += ". Verify the plugin is installed, activated, and the API namespace matches"`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).
  [x] SKIPPED (False Positive)

