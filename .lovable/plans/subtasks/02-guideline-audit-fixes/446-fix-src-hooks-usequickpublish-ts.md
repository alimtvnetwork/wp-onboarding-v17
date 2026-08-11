# Subtask 446: Fix violations in src/hooks/useQuickPublish.ts

Target File: `src/hooks/useQuickPublish.ts`

## Violations

- **Line 60**: abbreviations - Invalid abbreviation casing
  `const ids = JSON.parse(saved) as number[];`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

