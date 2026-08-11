# Subtask 340: Fix violations in backend/internal/services/site/ServiceRemotePlugins.go

Target File: `backend/internal/services/site/ServiceRemotePlugins.go`

## Violations

- **Line 17**: abbreviations - Invalid abbreviation casing
  `Plugin      string `json:"plugin"`      // external key (WordPress REST API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 89**: abbreviations - Invalid abbreviation casing
  `s.log.Warn("Riseup Asia Uploader API unavailable on remote site", "siteId", siteId, "siteUrl", site.Url, "error", uploaderResult.AppError())`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 96**: abbreviations - Invalid abbreviation casing
  `s.log.Debug("Remote plugins fetched via Uploader API", "siteId", siteId, "count", len(plugins))`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

