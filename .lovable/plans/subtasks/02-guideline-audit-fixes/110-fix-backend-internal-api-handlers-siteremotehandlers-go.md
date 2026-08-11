# Subtask 110: Fix violations in backend/internal/api/handlers/SiteRemoteHandlers.go

Target File: `backend/internal/api/handlers/SiteRemoteHandlers.go`

## Violations

- **Line 76**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, siteId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 84**: go-loose-types - Type erasure (any/interface{})
  `func(ctx context.Context, siteId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 17**: abbreviations - Invalid abbreviation casing
  `// remotePluginInput is the JSON body struct for remote plugin actions`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 23**: abbreviations - Invalid abbreviation casing
  `// remotePluginParsed holds the parsed site ID and plugin slug from a request.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 29**: abbreviations - Invalid abbreviation casing
  `// parseRemotePluginInput reads and validates the plugin slug from JSON body`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 45**: abbreviations - Invalid abbreviation casing
  `// parseRemotePluginInputOrFail parses site ID + plugin slug, writing error responses on failure.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 65**: abbreviations - Invalid abbreviation casing
  `respondBadRequest(w, apperror.ErrConfigParse, "Plugin slug is required in JSON body")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 231**: abbreviations - Invalid abbreviation casing
  `// DeleteRemotePlugin removes a plugin from a remote WordPress site (POST with JSON body)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

