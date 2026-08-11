# Subtask 399: Fix violations in src/components/errors/FrontendSection.tsx

Target File: `src/components/errors/FrontendSection.tsx`

## Violations

- **Line 294**: abbreviations - Invalid abbreviation casing
  `<Button variant="ghost" size="sm" onClick={() => copySection("Context", JSON.stringify(error.context, null, 2))}>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

