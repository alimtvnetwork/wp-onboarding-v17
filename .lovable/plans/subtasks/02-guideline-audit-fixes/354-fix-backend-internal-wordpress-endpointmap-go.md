# Subtask 354: Fix violations in backend/internal/wordpress/EndpointMap.go

Target File: `backend/internal/wordpress/EndpointMap.go`

## Violations

- **Line 6**: abbreviations - Invalid abbreviation casing
  `// Go API route that initiated the call and the WordPress REST`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 108**: abbreviations - Invalid abbreviation casing
  `// GoEndpointRoute describes the Go backend API route for a delegated operation.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 109**: abbreviations - Invalid abbreviation casing
  `// The {id} placeholder represents the site ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 115**: abbreviations - Invalid abbreviation casing
  `// WPEndpointRoute describes the WordPress REST API endpoint that receives the delegated request.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 121**: abbreviations - Invalid abbreviation casing
  `// GoEndpointMap maps each operation enum to the Go backend API route.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 304**: abbreviations - Invalid abbreviation casing
  `// ResolveWPEndpoint returns the full WordPress REST API path for a given operation.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

