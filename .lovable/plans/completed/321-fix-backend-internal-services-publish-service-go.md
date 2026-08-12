# Subtask 321: Fix violations in backend/internal/services/publish/Service.go

Target File: `backend/internal/services/publish/Service.go`

## Violations

- **Line 182**: abbreviations - Invalid abbreviation casing
  `Where   string          `json:",omitempty"` // Target URL/path`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] SKIPPED (False Positive)
