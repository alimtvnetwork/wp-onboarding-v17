# Subtask 316: Fix violations in backend/internal/services/e2e/ServiceSeed.go

Target File: `backend/internal/services/e2e/ServiceSeed.go`

## Violations

- **Line 56**: abbreviations - Invalid abbreviation casing
  `{Id: "TC-SITE-002", SuiteId: "site-connections", Name: "Test Connection", Description: "Test WP REST API connectivity", Steps: []string{"Create site", "POST /sites/{id}/test"}, ExpectedResult: "Success with WP version", OrderIndex: 2},`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

