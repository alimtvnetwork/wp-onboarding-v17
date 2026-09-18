# Subtask 226: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/RestoreSqliteValidationTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/RestoreSqliteValidationTrait.php`

## Violations

- **Line 83**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($strategy === RestoreStrategyType::Truncate->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 110**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$verb = ($strategy === RestoreStrategyType::Merge->value) ? 'REPLACE' : 'INSERT';`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] SKIPPED (False Positive)
