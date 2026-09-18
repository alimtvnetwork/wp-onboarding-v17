# Subtask 598: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/Route/InvalidRouteTrait.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/Route/InvalidRouteTrait.php`

## Violations

- **Line 248**: abbreviations - Invalid abbreviation casing
  `$this->fileLogger->warn('REST API error response', $context);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 253**: abbreviations - Invalid abbreviation casing
  `$this->fileLogger->error('REST API error response', $context);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

