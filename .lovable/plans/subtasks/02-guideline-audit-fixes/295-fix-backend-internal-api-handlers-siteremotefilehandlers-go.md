# Subtask 295: Fix violations in backend/internal/api/handlers/SiteRemoteFileHandlers.go

Target File: `backend/internal/api/handlers/SiteRemoteFileHandlers.go`

## Violations

- **Line 12**: abbreviations - Invalid abbreviation casing
  `// pluginFileInput is the JSON body for GetRemotePluginFileContent.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 18**: abbreviations - Invalid abbreviation casing
  `// pluginFileParsed holds the parsed site ID and file input from a request.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 24**: abbreviations - Invalid abbreviation casing
  `// parseRemotePluginFileInputOrFail parses site ID + plugin slug + file path, writing error responses on failure.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

