# Subtask 560: Fix violations in wp-plugins/riseup-asia-uploader/includes/Database/Orm.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Database/Orm.php`

## Violations

- **Line 73**: abbreviations - Invalid abbreviation casing
  `* Execute raw SQL query.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

