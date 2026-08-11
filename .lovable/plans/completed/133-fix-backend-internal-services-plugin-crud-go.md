# Subtask 133: Fix violations in backend/internal/services/plugin/Crud.go

Target File: `backend/internal/services/plugin/Crud.go`

## Violations

- **Line 50**: go-loose-types - Type erasure (any/interface{})
  `func scanPluginColumns(dest *pluginRaw, scan func(dest ...any) error) error {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 14**: abbreviations - Invalid abbreviation casing
  `// SQL query constants (centralized per coding standard).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 273**: abbreviations - Invalid abbreviation casing
  `// encodeExcludePatterns marshals exclude patterns to JSON string.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] SKIPPED (False Positive)
