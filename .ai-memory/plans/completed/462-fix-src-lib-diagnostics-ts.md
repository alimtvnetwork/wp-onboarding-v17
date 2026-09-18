Status: completed

# Subtask 462: Fix violations in src/lib/diagnostics.ts

Target File: `src/lib/diagnostics.ts`

## Violations

- **Line 84**: abbreviations - Invalid abbreviation casing
  `lines.push(`Resolved API Origin: ${info.resolvedApiOrigin || "(same-origin / not set)"}`);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 85**: abbreviations - Invalid abbreviation casing
  `lines.push(`API Base (relative): ${info.apiBase}`);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 86**: abbreviations - Invalid abbreviation casing
  `lines.push(`API Base (absolute): ${info.apiBaseAbsolute}`);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 87**: abbreviations - Invalid abbreviation casing
  `lines.push(`WebSocket URL: ${info.wsUrl}`);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

