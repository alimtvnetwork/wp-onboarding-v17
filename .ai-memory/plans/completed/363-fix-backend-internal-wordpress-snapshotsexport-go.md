# Subtask 363: Fix violations in backend/internal/wordpress/SnapshotsExport.go

Target File: `backend/internal/wordpress/SnapshotsExport.go`

## Violations

- **Line 16**: abbreviations - Invalid abbreviation casing
  `Id        string `json:"id"`        // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 24**: abbreviations - Invalid abbreviation casing
  `TotalSnapshots int    `json:"totalSnapshots"` // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 34**: abbreviations - Invalid abbreviation casing
  `Success          bool   `json:"success"`                    // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 119**: abbreviations - Invalid abbreviation casing
  `Name   string `json:"name"`   // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

