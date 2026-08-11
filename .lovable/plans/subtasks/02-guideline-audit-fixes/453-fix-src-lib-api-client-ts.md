# Subtask 453: Fix violations in src/lib/api/client.ts

Target File: `src/lib/api/client.ts`

## Violations

- **Line 56**: abbreviations - Invalid abbreviation casing
  `message: "Unknown API error",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 116**: abbreviations - Invalid abbreviation casing
  `// JSON happy-path`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 118**: abbreviations - Invalid abbreviation casing
  `const parsed = JSON.parse(raw);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 123**: abbreviations - Invalid abbreviation casing
  `// Non-envelope JSON: transform PascalCase keys → camelCase`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 127**: abbreviations - Invalid abbreviation casing
  `// Server error (5xx) with non-JSON body — backend crash / unhandled panic`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 135**: abbreviations - Invalid abbreviation casing
  `"The server returned an error instead of a JSON response. This typically means an unhandled exception or panic in the backend.\n\n" +`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 160**: abbreviations - Invalid abbreviation casing
  `message: "API returned HTML instead of JSON",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 162**: abbreviations - Invalid abbreviation casing
  `"This usually means the UI is not talking to the Go backend (wrong base URL/port, or preview environment).\n" +`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 163**: abbreviations - Invalid abbreviation casing
  ``Requested URL: ${requestUrl}\n` +`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 164**: abbreviations - Invalid abbreviation casing
  ``Configured API base: ${apiBase}\n` +`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 165**: abbreviations - Invalid abbreviation casing
  ``API Base (absolute): ${toAbsoluteUrl(apiBase)}\n` +`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 179**: abbreviations - Invalid abbreviation casing
  `// Unexpected non-JSON (but not HTML)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 184**: abbreviations - Invalid abbreviation casing
  `message: "Unexpected API response format",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 186**: abbreviations - Invalid abbreviation casing
  ``Expected JSON but got: ${contentType || "unknown"}\n` +`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 187**: abbreviations - Invalid abbreviation casing
  ``Requested URL: ${requestUrl}\n` +`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 199**: abbreviations - Invalid abbreviation casing
  `logger.error(`API request failed: ${endpoint}`, error, { endpoint, method, duration });`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

