# Subtask 389: Fix violations in src/components/backup/BackupProgressDialog.tsx

Target File: `src/components/backup/BackupProgressDialog.tsx`

## Violations

- **Line 128**: abbreviations - Invalid abbreviation casing
  `- **Plugin:** ${pluginName || "N/A"} ${mappingId ? `(Mapping ID: ${mappingId})` : ""}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

