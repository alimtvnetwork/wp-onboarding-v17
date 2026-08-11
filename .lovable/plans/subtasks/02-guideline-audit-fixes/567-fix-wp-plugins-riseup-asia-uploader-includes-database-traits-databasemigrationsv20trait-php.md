# Subtask 567: Fix violations in wp-plugins/riseup-asia-uploader/includes/Database/Traits/DatabaseMigrationsV20Trait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Database/Traits/DatabaseMigrationsV20Trait.php`

## Violations

- **Line 29**: abbreviations - Invalid abbreviation casing
  `$sql = <<<SQL`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 50**: abbreviations - Invalid abbreviation casing
  `SQL;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

