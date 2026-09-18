# Subtask 347: Fix violations in backend/internal/wordpress/ClientConnectionSteps.go

Target File: `backend/internal/wordpress/ClientConnectionSteps.go`

## Violations

- **Line 18**: abbreviations - Invalid abbreviation casing
  `// 1. REST API probe   2. Auth check   3. Parse user info   4. Plugin access   5. Write test`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 33**: abbreviations - Invalid abbreviation casing
  `// runPreAuthSteps executes REST API probe and authentication.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 56**: abbreviations - Invalid abbreviation casing
  `// probeRestApi checks WordPress REST API availability (Step 1).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 78**: abbreviations - Invalid abbreviation casing
  `// reportProbeStart sends the DNS/API check start event.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 83**: abbreviations - Invalid abbreviation casing
  `Message: "Checking WordPress REST API availability...",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 94**: abbreviations - Invalid abbreviation casing
  `Message: fmt.Sprintf("REST API not accessible: %v", err),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 99**: abbreviations - Invalid abbreviation casing
  `return apperror.Wrap(err, apperror.ErrWPAPIDisabled, "REST API not accessible").WithUrl(c.baseUrl)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 107**: abbreviations - Invalid abbreviation casing
  `Message: "REST API is available",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 113**: abbreviations - Invalid abbreviation casing
  `// validateRestApiStatus checks the REST API response status and parses site info.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 138**: abbreviations - Invalid abbreviation casing
  `Message: "REST API not found - is permalink structure set?",`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 143**: abbreviations - Invalid abbreviation casing
  `return apperror.New(apperror.ErrWPAPIDisabled, "WordPress REST API not found - ensure permalinks are enabled").WithUrl(c.baseUrl)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 180**: abbreviations - Invalid abbreviation casing
  `// fetchAuthResponse sends the authentication API call.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 217**: abbreviations - Invalid abbreviation casing
  `Message: fmt.Sprintf("Authenticated as %s (ID: %d)", result.UserDisplayName, result.UserId),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

