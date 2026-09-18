# Subtask 564: Fix violations in wp-plugins/riseup-asia-uploader/includes/Database/Traits/DatabaseMigrationsV15Trait.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/Database/Traits/DatabaseMigrationsV15Trait.php`

## Violations

- **Line 24**: abbreviations - Invalid abbreviation casing
  `private const V15_FIX_UPLOAD_SOURCE_QUERY = <<<'SQL'`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 31**: abbreviations - Invalid abbreviation casing
  `SQL;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

