# Subtask 393: Fix violations in src/components/command-palette/CommandPalette.tsx

Target File: `src/components/command-palette/CommandPalette.tsx`

## Violations

- **Line 78**: abbreviations - Invalid abbreviation casing
  `{ id: "api-explorer", label: "API Explorer", icon: Code2, action: () => go("/api-explorer"), group: "Navigation", keywords: ["swagger", "rest"] },`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

