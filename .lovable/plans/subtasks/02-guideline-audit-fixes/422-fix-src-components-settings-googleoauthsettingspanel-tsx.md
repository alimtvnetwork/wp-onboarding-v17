# Subtask 422: Fix violations in src/components/settings/GoogleOAuthSettingsPanel.tsx

Target File: `src/components/settings/GoogleOAuthSettingsPanel.tsx`

## Violations

- **Line 57**: abbreviations - Invalid abbreviation casing
  `throw new Error("Client ID is required");`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 134**: abbreviations - Invalid abbreviation casing
  `<Label htmlFor="google-client-id" className="text-sm">Client ID</Label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 240**: abbreviations - Invalid abbreviation casing
  `<li>Create an <strong>OAuth 2.0 Client ID</strong> (Web application type)</li>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 242**: abbreviations - Invalid abbreviation casing
  `<li>Copy the Client ID and Client Secret here</li>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

