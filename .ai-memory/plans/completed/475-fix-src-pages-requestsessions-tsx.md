Status: completed

# Subtask 475: Fix violations in src/pages/RequestSessions.tsx

Target File: `src/pages/RequestSessions.tsx`

## Violations

- **Line 106**: abbreviations - Invalid abbreviation casing
  `// Try to parse and re-format if it's a JSON string`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 108**: abbreviations - Invalid abbreviation casing
  `return JSON.stringify(JSON.parse(value), null, 2);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 113**: abbreviations - Invalid abbreviation casing
  `return JSON.stringify(value, null, 2);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 312**: abbreviations - Invalid abbreviation casing
  `Per-API-call request logs with full request/response inspection`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 420**: abbreviations - Invalid abbreviation casing
  `placeholder="Search path, method, ID..."`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 552**: abbreviations - Invalid abbreviation casing
  `title="Copy full session JSON"`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 554**: abbreviations - Invalid abbreviation casing
  `navigator.clipboard.writeText(JSON.stringify(detail, null, 2));`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 564**: abbreviations - Invalid abbreviation casing
  `const blob = new Blob([JSON.stringify(detail, null, 2)], { type: "application/json" });`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 565**: abbreviations - Invalid abbreviation casing
  `const url = URL.createObjectURL(blob);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 570**: abbreviations - Invalid abbreviation casing
  `URL.revokeObjectURL(url);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

