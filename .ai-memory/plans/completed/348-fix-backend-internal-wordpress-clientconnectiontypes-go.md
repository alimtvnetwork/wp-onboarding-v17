# Subtask 348: Fix violations in backend/internal/wordpress/ClientConnectionTypes.go

Target File: `backend/internal/wordpress/ClientConnectionTypes.go`

## Violations

- **Line 4**: abbreviations - Invalid abbreviation casing
  `// wpRootInfo is the typed struct for parsing the WordPress REST API root response.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 6**: abbreviations - Invalid abbreviation casing
  `Name        string `json:"name"`        // external key (WordPress REST API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 12**: abbreviations - Invalid abbreviation casing
  `Id           int             `json:"id"`           // external key (WordPress REST API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 21**: abbreviations - Invalid abbreviation casing
  `Id int `json:"id"` // external key (WordPress REST API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 26**: abbreviations - Invalid abbreviation casing
  `Title   string `json:"title"`   // external key (WordPress REST API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

