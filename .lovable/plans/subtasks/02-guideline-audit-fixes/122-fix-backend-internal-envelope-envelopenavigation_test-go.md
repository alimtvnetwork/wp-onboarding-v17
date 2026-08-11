# Subtask 122: Fix violations in backend/internal/envelope/EnvelopeNavigation_test.go

Target File: `backend/internal/envelope/EnvelopeNavigation_test.go`

## Violations

- **Line 169**: go-loose-types - Type erasure (any/interface{})
  `var decoded map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 173**: go-loose-types - Type erasure (any/interface{})
  `status, ok := decoded["Status"].(map[string]any)`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 192**: go-loose-types - Type erasure (any/interface{})
  `var decoded map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 125**: abbreviations - Invalid abbreviation casing
  `t.Error("expected NextPage URL containing page=2")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 140**: abbreviations - Invalid abbreviation casing
  `t.Error("expected PrevPage URL containing page=9")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 168**: abbreviations - Invalid abbreviation casing
  `// Decode as generic map to verify JSON structure`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 175**: abbreviations - Invalid abbreviation casing
  `t.Fatal("expected Status block in JSON")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

