# Subtask 590: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/CloudStorage/CloudStorageSettingsTrait.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/CloudStorage/CloudStorageSettingsTrait.php`

## Violations

- **Line 65**: abbreviations - Invalid abbreviation casing
  `return $this->validationError('Invalid or missing JSON body', $request);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 95**: abbreviations - Invalid abbreviation casing
  `/** Format a settings row for API response. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

