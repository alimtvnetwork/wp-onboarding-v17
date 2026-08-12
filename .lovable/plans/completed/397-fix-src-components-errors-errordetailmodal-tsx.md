# Subtask 397: Fix violations in src/components/errors/ErrorDetailModal.tsx

Target File: `src/components/errors/ErrorDetailModal.tsx`

## Violations

- **Line 60**: abbreviations - Invalid abbreviation casing
  `E1001: ["Check JSON syntax in request body", "Ensure Content-Type is application/json"],`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 61**: abbreviations - Invalid abbreviation casing
  `E1002: ["Verify the ID is a valid number", "Check the URL path for typos"],`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 62**: abbreviations - Invalid abbreviation casing
  `E2001: ["Verify WordPress REST API is enabled", "Check site URL ends with /wp-json/wp/v2"],`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 68**: abbreviations - Invalid abbreviation casing
  `E5001: ["Ensure git is installed and accessible", "Verify repository URL is correct"],`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 196**: abbreviations - Invalid abbreviation casing
  `: JSON.stringify(error.context?.requestData, null, 2)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 205**: abbreviations - Invalid abbreviation casing
  `: JSON.stringify(error.context.requestData, null, 2)}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 223**: abbreviations - Invalid abbreviation casing
  `: JSON.stringify(error.context?.responseData, null, 2)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 232**: abbreviations - Invalid abbreviation casing
  `: JSON.stringify(error.context.responseData, null, 2)}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 241**: abbreviations - Invalid abbreviation casing
  `{JSON.stringify(error.context, null, 2)}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

