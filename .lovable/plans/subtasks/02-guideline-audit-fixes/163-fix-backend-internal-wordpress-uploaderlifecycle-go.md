# Subtask 163: Fix violations in backend/internal/wordpress/UploaderLifecycle.go

Target File: `backend/internal/wordpress/UploaderLifecycle.go`

## Violations

- **Line 218**: go-loose-types - Type erasure (any/interface{})
  `func decodeApiResponseTyped[T any](data []byte, label string) apperror.Result[*T] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 72**: abbreviations - Invalid abbreviation casing
  `PluginSlug string `json:"pluginSlug"` // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 171**: abbreviations - Invalid abbreviation casing
  `Success bool                 `json:"success"` // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 186**: abbreviations - Invalid abbreviation casing
  `Success bool               `json:"success"` // external key (Riseup Asia Uploader API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 217**: abbreviations - Invalid abbreviation casing
  `// decodeApiResponseTyped unmarshals raw JSON bytes into *T, returning apperror.Result.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

