# Subtask 103: Fix violations in backend/internal/api/handlers/PluginScanHandlers.go

Target File: `backend/internal/api/handlers/PluginScanHandlers.go`

## Violations

- **Line 24**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, id int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 36**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 125**: go-loose-types - Type erasure (any/interface{})
  `// previous map[string]any output (empty fields were skipped via addStringIfSet).`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 41**: abbreviations - Invalid abbreviation casing
  `// scanPathInput is the JSON body for ScanDirectoryPath.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 124**: abbreviations - Invalid abbreviation casing
  `// All optional metadata uses `omitempty` so the JSON shape remains identical to the`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 189**: abbreviations - Invalid abbreviation casing
  `// scanPathsInput is the JSON body for ScanDirectoriesPath.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 312**: abbreviations - Invalid abbreviation casing
  `s := r.URL.Query().Get("siteId")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

