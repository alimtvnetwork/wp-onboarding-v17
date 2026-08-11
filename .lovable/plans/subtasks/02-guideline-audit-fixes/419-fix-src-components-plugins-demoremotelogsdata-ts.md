# Subtask 419: Fix violations in src/components/plugins/demoRemoteLogsData.ts

Target File: `src/components/plugins/demoRemoteLogsData.ts`

## Violations

- **Line 14**: abbreviations - Invalid abbreviation casing
  `[2026-03-25T08:12:05Z] INFO  REST API routes registered: /logs/status, /logs/retrieve, /logs/clear`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 32**: abbreviations - Invalid abbreviation casing
  `const DEMO_ERROR_CONTENT = `[2026-03-24T14:02:11Z] ERROR  Failed to connect to remote API: cURL error 28 — Connection timed out after 30001ms`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 34**: abbreviations - Invalid abbreviation casing
  `[2026-03-24T14:02:16Z] ERROR  Retry 1/3 — still failing: cURL error 28`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 35**: abbreviations - Invalid abbreviation casing
  `[2026-03-24T14:02:21Z] ERROR  Retry 2/3 — still failing: cURL error 28`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 49**: abbreviations - Invalid abbreviation casing
  `Exception: Remote API unreachable after 3 retries`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

