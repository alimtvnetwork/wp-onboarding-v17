# Subtask 401: Fix violations in src/components/errors/RequestDetails.tsx

Target File: `src/components/errors/RequestDetails.tsx`

## Violations

- **Line 59**: abbreviations - Invalid abbreviation casing
  `<Button variant="ghost" size="sm" className="h-5 px-1" onClick={() => copySection("Request body", JSON.stringify(error.requestBody, null, 2))}>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 64**: abbreviations - Invalid abbreviation casing
  `{JSON.stringify(error.requestBody, null, 2)}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 100**: abbreviations - Invalid abbreviation casing
  `{typeof phpResponseBody === "string" ? phpResponseBody : JSON.stringify(phpResponseBody, null, 2)}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 123**: abbreviations - Invalid abbreviation casing
  `API Request`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 149**: abbreviations - Invalid abbreviation casing
  `<Button variant="ghost" size="sm" onClick={() => copySection("Request body", JSON.stringify(error.requestBody, null, 2))}>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 154**: abbreviations - Invalid abbreviation casing
  `{JSON.stringify(error.requestBody, null, 2)}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 162**: abbreviations - Invalid abbreviation casing
  `{apiBase && <p className="text-xs"><span className="text-muted-foreground">API Base: </span><code className="bg-background/60 px-1 py-0.5 rounded break-all">{apiBase}</code></p>}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 163**: abbreviations - Invalid abbreviation casing
  `{apiBaseAbsolute && <p className="text-xs"><span className="text-muted-foreground">API Base (absolute): </span><code className="bg-background/60 px-1 py-0.5 rounded break-all">{apiBaseAbsolute}</code></p>}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 167**: abbreviations - Invalid abbreviation casing
  `{resolvedApiOrigin && <p className="text-xs"><span className="text-muted-foreground">Resolved API Origin: </span><code className="bg-background/60 px-1 py-0.5 rounded break-all">{resolvedApiOrigin}</code></p>}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

