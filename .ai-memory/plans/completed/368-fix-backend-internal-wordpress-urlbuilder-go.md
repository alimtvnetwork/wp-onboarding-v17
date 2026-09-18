# Subtask 368: Fix violations in backend/internal/wordpress/UrlBuilder.go

Target File: `backend/internal/wordpress/UrlBuilder.go`

## Violations

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package wordpress — URL construction helpers.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 2**: abbreviations - Invalid abbreviation casing
  `// All WordPress REST API URL construction MUST go through these functions.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 12**: abbreviations - Invalid abbreviation casing
  `// BuildWpJsonUrl constructs a full WordPress JSON API URL: {baseUrl}/wp-json{endpoint}.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 18**: abbreviations - Invalid abbreviation casing
  `// BuildWpPluginUrl constructs a full WordPress plugin API URL: {baseUrl}/wp-json/{namespace}{endpointPath}.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 23**: abbreviations - Invalid abbreviation casing
  `// BuildWpProbeUrl constructs the WordPress REST API probe URL: {baseUrl}/wp-json/.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

