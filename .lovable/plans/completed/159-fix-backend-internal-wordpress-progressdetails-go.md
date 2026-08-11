# Subtask 159: Fix violations in backend/internal/wordpress/ProgressDetails.go

Target File: `backend/internal/wordpress/ProgressDetails.go`

## Violations

- **Line 2**: go-loose-types - Type erasure (any/interface{})
  `// These replace the legacy ProgressDetails (map[string]any) with typed structs,`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 22**: go-loose-types - Type erasure (any/interface{})
  `func toProgress[T any](v T) ProgressDetails {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 8**: abbreviations - Invalid abbreviation casing
  `// ProgressDetails is pre-marshaled JSON for progress callback payloads.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 9**: abbreviations - Invalid abbreviation casing
  `// Call sites MUST use toProgress() with a typed struct — never construct raw JSON.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 32**: abbreviations - Invalid abbreviation casing
  `// UrlProgress carries a URL-only progress context.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 37**: abbreviations - Invalid abbreviation casing
  `// UrlErrorProgress carries a URL + error progress context.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 43**: abbreviations - Invalid abbreviation casing
  `// UrlStatusProgress carries a URL + HTTP status code progress context.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] SKIPPED (False Positive)
