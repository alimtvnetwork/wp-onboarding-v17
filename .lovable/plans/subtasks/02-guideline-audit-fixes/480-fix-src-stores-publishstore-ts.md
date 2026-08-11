# Subtask 480: Fix violations in src/stores/publishStore.ts

Target File: `src/stores/publishStore.ts`

## Violations

- **Line 38**: abbreviations - Invalid abbreviation casing
  `id: string; // Unique operation ID (pluginId-siteId-timestamp)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 39**: abbreviations - Invalid abbreviation casing
  `sessionId?: string; // Backend session ID for log retrieval`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 69**: abbreviations - Invalid abbreviation casing
  `// Active operations indexed by operation ID`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

