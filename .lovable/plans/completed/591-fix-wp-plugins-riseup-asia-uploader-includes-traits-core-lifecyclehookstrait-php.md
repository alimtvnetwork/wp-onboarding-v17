# Subtask 591: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/Core/LifecycleHooksTrait.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/Core/LifecycleHooksTrait.php`

## Violations

- **Line 113**: abbreviations - Invalid abbreviation casing
  `* Check if the current request is a REST API request.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

