# Subtask 481: Fix violations in src/types/cloudStorage.ts

Target File: `src/types/cloudStorage.ts`

## Violations

- **Line 192**: abbreviations - Invalid abbreviation casing
  `{ key: 'BaseUrl', label: 'Base URL', placeholder: 'https://gitlab.com', help: 'Leave blank for gitlab.com, or enter your self-hosted URL', required: false },`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

