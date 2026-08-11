# Subtask 573: Fix violations in wp-plugins/riseup-asia-uploader/includes/Enums/SelfUpdateStatusType.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Enums/SelfUpdateStatusType.php`

## Violations

- **Line 5**: abbreviations - Invalid abbreviation casing
  `* Used in REST API responses to provide machine-readable reason codes`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 98**: abbreviations - Invalid abbreviation casing
  `* Get a human-readable label for REST API responses.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 119**: abbreviations - Invalid abbreviation casing
  `self::RestHookMissing        => 'REST API hooks were not registered after activation',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

