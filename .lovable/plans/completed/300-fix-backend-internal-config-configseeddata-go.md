# Subtask 300: Fix violations in backend/internal/config/ConfigSeedData.go

Target File: `backend/internal/config/ConfigSeedData.go`

## Violations

- **Line 34**: abbreviations - Invalid abbreviation casing
  `// seedSingleSite creates or finds a single site; returns its ID or 0 on failure.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 36**: abbreviations - Invalid abbreviation casing
  `normalizedUrl := urlutil.NormalizeWordPressUrl(site.URL)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] SKIPPED (False Positive)
