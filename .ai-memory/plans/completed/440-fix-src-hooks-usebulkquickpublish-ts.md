Status: completed

# Subtask 440: Fix violations in src/hooks/useBulkQuickPublish.ts

Target File: `src/hooks/useBulkQuickPublish.ts`

## Violations

- **Line 36**: abbreviations - Invalid abbreviation casing
  `concurrency?: number; // Kept for API compat but unused (server controls sequencing)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 95**: abbreviations - Invalid abbreviation casing
  `const ids = JSON.parse(saved) as number[];`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

