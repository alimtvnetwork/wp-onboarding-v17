# Subtask 400: Fix violations in src/components/errors/GlobalErrorModal.tsx

Target File: `src/components/errors/GlobalErrorModal.tsx`

## Violations

- **Line 29**: abbreviations - Invalid abbreviation casing
  `* The body is typically a JSON string from WordPress containing error data`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 37**: abbreviations - Invalid abbreviation casing
  `const parsed = JSON.parse(raw);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 111**: abbreviations - Invalid abbreviation casing
  `// 2. Parse from remoteResponseBody (raw PHP error JSON embedded in delegated response)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

