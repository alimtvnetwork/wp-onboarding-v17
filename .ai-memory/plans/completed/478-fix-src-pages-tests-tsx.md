Status: completed

# Subtask 478: Fix violations in src/pages/Tests.tsx

Target File: `src/pages/Tests.tsx`

## Violations

- **Line 98**: abbreviations - Invalid abbreviation casing
  `{ id: "TC-SITE-002", suiteId: "site-connections", name: "Test Connection", description: "Test WP REST API connectivity", steps: ["Create site", "Call POST /sites/{id}/test", "Verify success response with WP version"], expectedResult: "Connection verified" },`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

