# Subtask 221: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/ManagerRestoreValidationTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/ManagerRestoreValidationTrait.php`

## Violations

- **Line 28**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isIncremental = $hasScope && $snapshot['scope'] === SnapshotModeType::Incremental->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 103**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isSelective = ($mode === RestoreModeType::Selective->value) && $hasTablesSelection;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 70**: abbreviations - Invalid abbreviation casing
  `* @return int|array|null Backup ID, error array, or null.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] FIXED

