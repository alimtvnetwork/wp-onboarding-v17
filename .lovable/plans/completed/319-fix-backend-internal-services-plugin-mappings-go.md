# Subtask 319: Fix violations in backend/internal/services/plugin/Mappings.go

Target File: `backend/internal/services/plugin/Mappings.go`

## Violations

- **Line 61**: abbreviations - Invalid abbreviation casing
  `// scanMappingWithSite scans a mapping row that includes site name and URL.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 163**: abbreviations - Invalid abbreviation casing
  `// insertMapping inserts a mapping row and returns the new ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 176**: abbreviations - Invalid abbreviation casing
  `// loadMappingById fetches a mapping by its ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] SKIPPED (False Positive)
