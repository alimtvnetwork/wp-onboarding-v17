Status: completed

# Subtask 457: Fix violations in src/lib/api/keyTransform.ts

Target File: `src/lib/api/keyTransform.ts`

## Violations

- **Line 5**: abbreviations - Invalid abbreviation casing
  `// object keys at the API boundary so all downstream code stays unchanged.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 13**: abbreviations - Invalid abbreviation casing
  `*   ID         → id`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 15**: abbreviations - Invalid abbreviation casing
  `*   URL        → url`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 31**: abbreviations - Invalid abbreviation casing
  `if (i === key.length) return key.toLowerCase();       // all uppercase (e.g. "ID", "URL")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

