# Subtask 563: Fix violations in wp-plugins/riseup-asia-uploader/includes/Database/Traits/DatabaseMigrationsV14Trait.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/Database/Traits/DatabaseMigrationsV14Trait.php`

## Violations

- **Line 23**: abbreviations - Invalid abbreviation casing
  `// ── SQL Constants ────────────────────────────────────────────────`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 26**: abbreviations - Invalid abbreviation casing
  `private const V14_TRANSACTIONS_TRIGGERED_BY_QUERY = <<<'SQL'`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 35**: abbreviations - Invalid abbreviation casing
  `SQL;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 38**: abbreviations - Invalid abbreviation casing
  `private const V14_TRANSACTIONS_UPLOAD_SOURCE_QUERY = <<<'SQL'`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 46**: abbreviations - Invalid abbreviation casing
  `SQL;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 49**: abbreviations - Invalid abbreviation casing
  `private const V14_SNAPSHOTS_TRIGGERED_BY_QUERY = <<<'SQL'`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 57**: abbreviations - Invalid abbreviation casing
  `SQL;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 60**: abbreviations - Invalid abbreviation casing
  `private const V14_SNAPSHOTS_TRIGGER_SOURCE_QUERY = <<<'SQL'`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 69**: abbreviations - Invalid abbreviation casing
  `SQL;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 73**: abbreviations - Invalid abbreviation casing
  `/** Execute SQL only if the target column exists in the table. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

