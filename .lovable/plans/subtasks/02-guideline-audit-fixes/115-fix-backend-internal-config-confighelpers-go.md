# Subtask 115: Fix violations in backend/internal/config/ConfigHelpers.go

Target File: `backend/internal/config/ConfigHelpers.go`

## Violations

- **Line 17**: go-loose-types - Type erasure (any/interface{})
  `Value any // restricted to int/string/bool from config fields`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 85**: abbreviations - Invalid abbreviation casing
  `normalizedUrl := urlutil.NormalizeWordPressUrl(site.URL)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

