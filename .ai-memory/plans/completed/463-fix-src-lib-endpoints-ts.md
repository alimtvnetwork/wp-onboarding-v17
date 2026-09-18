Status: completed

# Subtask 463: Fix violations in src/lib/endpoints.ts

Target File: `src/lib/endpoints.ts`

## Violations

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Centralized endpoint resolution for API + WebSocket.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 5**: abbreviations - Invalid abbreviation casing
  `// - VITE_WS_URL="ws://localhost:8080/ws"  (full ws URL)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 21**: abbreviations - Invalid abbreviation casing
  `// Protocol-relative URL`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 50**: abbreviations - Invalid abbreviation casing
  `const url = new URL(targetUrl);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 76**: abbreviations - Invalid abbreviation casing
  `/** Returns a fetch-ready URL (relative or absolute). */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 79**: abbreviations - Invalid abbreviation casing
  `throw new Error(`API endpoint must start with '/': ${endpoint}`);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 84**: abbreviations - Invalid abbreviation casing
  `/** Returns an absolute URL string for display/debugging. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 88**: abbreviations - Invalid abbreviation casing
  `return new URL(urlOrPath, window.location.origin).toString();`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 105**: abbreviations - Invalid abbreviation casing
  `// If API origin is configured, derive WS from it unless explicitly overridden.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 109**: abbreviations - Invalid abbreviation casing
  `const url = new URL(apiOrigin);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

