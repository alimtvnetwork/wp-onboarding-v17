# Subtask 406: Fix violations in src/components/errors/errorReportGenerator.ts

Target File: `src/components/errors/errorReportGenerator.ts`

## Violations

- **Line 14**: abbreviations - Invalid abbreviation casing
  `* Strip base URL and timestamps from execution chain lines.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 21**: abbreviations - Invalid abbreviation casing
  `// Remove base URL, keep only path after /api/v1 or /v1`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 50**: abbreviations - Invalid abbreviation casing
  `* Build the backend error.log.txt section from CapturedError data (no API call).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 82**: abbreviations - Invalid abbreviation casing
  `delegatedLines.push(`        ${typeof delegated.RequestBody === 'string' ? delegated.RequestBody : JSON.stringify(delegated.RequestBody, null, 2).split('\n').join('\n        ')}`);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 95**: abbreviations - Invalid abbreviation casing
  `: JSON.stringify(delegated.Response, null, 2);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 119**: abbreviations - Invalid abbreviation casing
  `* Backend data is built from CapturedError (no API call needed).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 173**: abbreviations - Invalid abbreviation casing
  `sections.push(`\n### Context\n\n\`\`\`json\n${JSON.stringify(error.context, null, 2)}\n\`\`\``);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 206**: abbreviations - Invalid abbreviation casing
  `// Backend error.log.txt section (built from CapturedError, no API call)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 272**: abbreviations - Invalid abbreviation casing
  `return `${base}\n${unescapeEmbeddedNewlines(JSON.stringify(l.details, null, 2))}`;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 317**: abbreviations - Invalid abbreviation casing
  `? `### Session Info\n**Session ID:** ${error.sessionId}\n${error.sessionType ? `**Type:** ${error.sessionType}\n` : ""}*Fetch full logs via: GET /api/v1/sessions/${error.sessionId}/logs*\n``
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 324**: abbreviations - Invalid abbreviation casing
  `**ID:** ${error.id}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 341**: abbreviations - Invalid abbreviation casing
  `${error.requestBody ? `### Request Body\n\`\`\`json\n${JSON.stringify(error.requestBody, null, 2)}\n\`\`\`\n` : ""}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 349**: abbreviations - Invalid abbreviation casing
  `${error.context && Object.keys(error.context).length > 0 ? `### Context\n\`\`\`json\n${JSON.stringify(error.context, null, 2)}\n\`\`\`\n` : ""}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 371**: abbreviations - Invalid abbreviation casing
  `"Ensure REST API is enabled on the WordPress site",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 396**: abbreviations - Invalid abbreviation casing
  `"The API returned HTML instead of JSON - this usually means a routing issue",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 398**: abbreviations - Invalid abbreviation casing
  `"Verify VITE_API_URL points to the correct backend URL",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

