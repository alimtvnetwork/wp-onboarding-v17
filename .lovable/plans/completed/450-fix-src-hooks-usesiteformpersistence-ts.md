Status: completed

# Subtask 450: Fix violations in src/hooks/useSiteFormPersistence.ts

Target File: `src/hooks/useSiteFormPersistence.ts`

## Violations

- **Line 31**: abbreviations - Invalid abbreviation casing
  `const parsed = JSON.parse(saved) as Partial<SiteFormData>;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 53**: abbreviations - Invalid abbreviation casing
  `JSON.stringify({`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

