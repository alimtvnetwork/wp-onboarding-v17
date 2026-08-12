Status: completed

# Subtask 458: Fix violations in src/lib/api/methods.ts

Target File: `src/lib/api/methods.ts`

## Violations

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// API method definitions — the `api` object with all endpoint methods.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 83**: abbreviations - Invalid abbreviation casing
  `// API methods`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 94**: abbreviations - Invalid abbreviation casing
  `request<Site>("/sites", { method: "POST", body: JSON.stringify(site) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 96**: abbreviations - Invalid abbreviation casing
  `request<Site>(`/sites/${id}`, { method: "PUT", body: JSON.stringify(site) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 102**: abbreviations - Invalid abbreviation casing
  `request<{ isSuccess: boolean; wpVersion?: string; message?: string; siteName?: string; canManagePlugins?: boolean }>("/sites/test", { method: "POST", body: JSON.stringify(credentials) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 106**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ uploaderPath }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 111**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ siteIds, uploaderPath }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 116**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ siteIds }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 125**: abbreviations - Invalid abbreviation casing
  `request<SiteCredentialResponse>(`/sites/${siteId}/credentials`, { method: "POST", body: JSON.stringify(input) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 127**: abbreviations - Invalid abbreviation casing
  `request<SiteCredentialResponse>(`/sites/${siteId}/credentials/${credId}`, { method: "PUT", body: JSON.stringify(input) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 147**: abbreviations - Invalid abbreviation casing
  `request<Plugin>("/plugins", { method: "POST", body: JSON.stringify(plugin) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 149**: abbreviations - Invalid abbreviation casing
  `request<Plugin>(`/plugins/${id}`, { method: "PUT", body: JSON.stringify(plugin) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 155**: abbreviations - Invalid abbreviation casing
  `request<PluginMapping>(`/plugins/${pluginId}/mappings`, { method: "POST", body: JSON.stringify(mapping) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 157**: abbreviations - Invalid abbreviation casing
  `request<PluginMapping[]>(`/plugins/${pluginId}/mappings`, { method: "PUT", body: JSON.stringify(mapping) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 167**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify({ pluginIds })`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 176**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ plugin: pluginSlug }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 185**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ plugin: pluginSlug, ...(version ? { version } : {}) }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 190**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ plugin: pluginSlug, ...(version ? { version } : {}) }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 195**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ plugin: pluginSlug, ...(version ? { version } : {}) }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 238**: abbreviations - Invalid abbreviation casing
  `const json = JSON.parse(xhr.responseText);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 300**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ plugin: pluginSlug }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 305**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ plugin: pluginSlug, path: filePath }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 330**: abbreviations - Invalid abbreviation casing
  ``/plugins/${pluginId}/git/commit`, { method: "POST", body: JSON.stringify({ message }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 340**: abbreviations - Invalid abbreviation casing
  ``/plugins/bulk`, { method: "PATCH", body: JSON.stringify({ pluginIds, ...update }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 344**: abbreviations - Invalid abbreviation casing
  ``/plugins/bulk`, { method: "DELETE", body: JSON.stringify({ pluginIds }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 374**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify({ path, createDetection }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 400**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify({ paths, createDetection }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 462**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify(options),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 485**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify(input),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 499**: abbreviations - Invalid abbreviation casing
  `clearPublishHistory: () => request<void>("/publish-history", { method: "DELETE", body: JSON.stringify({ confirm: true }) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 544**: abbreviations - Invalid abbreviation casing
  `request<Settings>("/settings", { method: "PUT", body: JSON.stringify(settings) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 548**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify({ value })`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 567**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ path: filePath }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 572**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ path: filePath }) }`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 581**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify(opts)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 594**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify({ cases: [caseId], parallel: false, stopOnFailure: false }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 605**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify(opts || {}),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 612**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify(opts || {}),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 619**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify(settings),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 636**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify({ snapshot_id: snapshotId }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 642**: abbreviations - Invalid abbreviation casing
  `const parsed = JSON.parse(text);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 663**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify(opts || {}),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 670**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify(opts || {}),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 681**: abbreviations - Invalid abbreviation casing
  `return { success: false, error: { code: "E9005", message: "Non-JSON response", timestamp: new Date().toISOString() } };`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 683**: abbreviations - Invalid abbreviation casing
  `const parsed = JSON.parse(text);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 694**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify(opts || {}),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 713**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify(input)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 728**: abbreviations - Invalid abbreviation casing
  `body: JSON.stringify({ ids })`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 733**: abbreviations - Invalid abbreviation casing
  `// Request Sessions (per-API-call logging)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 759**: abbreviations - Invalid abbreviation casing
  `request<RemoteLogsClearConfirmResponse>(`/sites/${siteId}/remote-logs/confirm`, { method: "POST", body: JSON.stringify({ token }) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 761**: abbreviations - Invalid abbreviation casing
  `request<RemoteLogsEmailResponse>(`/sites/${siteId}/remote-logs/email`, { method: "POST", body: JSON.stringify(opts || {}) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 782**: abbreviations - Invalid abbreviation casing
  `request<{ account: unknown }>("/cloud-storage/accounts", { method: "POST", body: JSON.stringify(body) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 784**: abbreviations - Invalid abbreviation casing
  `request<{ account: unknown }>(`/cloud-storage/accounts/${id}`, { method: "PUT", body: JSON.stringify(body) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 790**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ AccountId: accountId }) },`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 795**: abbreviations - Invalid abbreviation casing
  `request<Record<string, unknown>>(`/cloud-storage/settings/${provider}`, { method: "PUT", body: JSON.stringify(settings) }),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 799**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ AccountLabel: accountLabel }) },`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 829**: abbreviations - Invalid abbreviation casing
  `{ method: "POST", body: JSON.stringify({ BackupId: backupId }) },`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 848**: abbreviations - Invalid abbreviation casing
  `{ method: "PUT", body: JSON.stringify(settings) },`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

