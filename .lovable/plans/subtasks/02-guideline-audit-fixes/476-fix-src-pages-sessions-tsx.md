# Subtask 476: Fix violations in src/pages/Sessions.tsx

Target File: `src/pages/Sessions.tsx`

## Violations

- **Line 470**: abbreviations - Invalid abbreviation casing
  `{JSON.stringify(selectedSession.metadata, null, 2)}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

