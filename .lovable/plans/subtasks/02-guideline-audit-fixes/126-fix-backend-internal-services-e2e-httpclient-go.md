# Subtask 126: Fix violations in backend/internal/services/e2e/HttpClient.go

Target File: `backend/internal/services/e2e/HttpClient.go`

## Violations

- **Line 49**: go-loose-types - Type erasure (any/interface{})
  `func (c *apiClient) post(path string, body any) (*apiResponse, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 54**: go-loose-types - Type erasure (any/interface{})
  `func (c *apiClient) put(path string, body any) (*apiResponse, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package e2e - HTTP client for making real API requests during E2E tests`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 13**: abbreviations - Invalid abbreviation casing
  `// apiClient wraps HTTP calls to the backend API`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 28**: abbreviations - Invalid abbreviation casing
  `// apiResponse holds a parsed JSON API response`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 31**: abbreviations - Invalid abbreviation casing
  `Success    bool            `json:"success"` // external key (our own API envelope)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 39**: abbreviations - Invalid abbreviation casing
  `Code    string `json:"code"`    // external key (our own API envelope)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 48**: abbreviations - Invalid abbreviation casing
  `// post performs a POST request with JSON body`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 53**: abbreviations - Invalid abbreviation casing
  `// put performs a PUT request with JSON body`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 63**: abbreviations - Invalid abbreviation casing
  `// dataField extracts a string field from the data JSON object.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 83**: abbreviations - Invalid abbreviation casing
  `// dataFieldFloat extracts a float64 field from the data JSON object.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 103**: abbreviations - Invalid abbreviation casing
  `// hasDataField checks if the data JSON object contains a given key.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 117**: abbreviations - Invalid abbreviation casing
  `// isDataArray checks if the data is a non-empty JSON array.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

