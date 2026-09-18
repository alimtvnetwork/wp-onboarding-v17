# Subtask 206: Fix violations in wp-plugins/riseup-asia-uploader/includes/Database/Traits/OrmQueryTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Database/Traits/OrmQueryTrait.php`

## Violations

- **Line 25**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$this->selectColumns = gettype($columns) === PhpNativeType::PhpArray->value ? $columns : func_get_args();`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 87**: abbreviations - Invalid abbreviation casing
  `/** Find a single record by ID. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 181**: abbreviations - Invalid abbreviation casing
  `/** Build SELECT SQL. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] FIXED
