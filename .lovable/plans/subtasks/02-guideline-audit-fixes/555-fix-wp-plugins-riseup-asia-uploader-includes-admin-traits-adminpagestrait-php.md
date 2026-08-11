# Subtask 555: Fix violations in wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminPagesTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminPagesTrait.php`

## Violations

- **Line 141**: abbreviations - Invalid abbreviation casing
  `'logs'           => ['label' => 'Logs API', 'desc' => 'Fetch transaction logs'],`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 162**: abbreviations - Invalid abbreviation casing
  `'openapi' => ['label' => 'OpenAPI Spec', 'desc' => 'API documentation endpoint'],`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

