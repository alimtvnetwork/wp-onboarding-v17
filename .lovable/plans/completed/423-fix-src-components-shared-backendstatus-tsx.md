# Subtask 423: Fix violations in src/components/shared/BackendStatus.tsx

Target File: `src/components/shared/BackendStatus.tsx`

## Violations

- **Line 23**: abbreviations - Invalid abbreviation casing
  `* 3. If response is JSON with 2xx → connected`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 24**: abbreviations - Invalid abbreviation casing
  `* 4. If response is JSON with non-2xx → disconnected/unhealthy`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 53**: abbreviations - Invalid abbreviation casing
  `// Case 1: HTML returned instead of JSON`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 58**: abbreviations - Invalid abbreviation casing
  `"Backend returned HTML instead of JSON. This usually means the backend is not running or the API URL is misconfigured.",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 67**: abbreviations - Invalid abbreviation casing
  `// Case 2: JSON response - check HTTP status`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 69**: abbreviations - Invalid abbreviation casing
  `// 2xx with JSON = connected`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 73**: abbreviations - Invalid abbreviation casing
  `// Non-2xx JSON response = backend is reachable but unhealthy`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 74**: abbreviations - Invalid abbreviation casing
  `const data = JSON.parse(raw) as { error?: { message?: string } };`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 112**: abbreviations - Invalid abbreviation casing
  `"The frontend cannot reach the backend API. If you're using the hosted preview, it cannot connect to your local backend—open the app from your local backend URL instead (e.g. http://localhost:8080).",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 151**: abbreviations - Invalid abbreviation casing
  `return "Backend disconnected — API requests are returning HTML instead of JSON";`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

