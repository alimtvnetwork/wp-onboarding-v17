# Subtask 566: Fix violations in wp-plugins/riseup-asia-uploader/includes/Database/Traits/DatabaseMigrationsV18Trait.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/Database/Traits/DatabaseMigrationsV18Trait.php`

## Violations

- **Line 27**: abbreviations - Invalid abbreviation casing
  `$sql = <<<SQL`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 41**: abbreviations - Invalid abbreviation casing
  `SQL;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 47**: abbreviations - Invalid abbreviation casing
  `$seedSql = <<<SQL`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 53**: abbreviations - Invalid abbreviation casing
  `SQL;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

