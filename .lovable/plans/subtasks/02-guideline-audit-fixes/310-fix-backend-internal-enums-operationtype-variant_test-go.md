# Subtask 310: Fix violations in backend/internal/enums/operationtype/Variant_test.go

Target File: `backend/internal/enums/operationtype/Variant_test.go`

## Violations

- **Line 195**: abbreviations - Invalid abbreviation casing
  `t.Errorf("JSON round-trip: got %s, want %s", parsed.Label(), v.Label())`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

