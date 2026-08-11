# Subtask 227: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/RestoreValidationTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/RestoreValidationTrait.php`

## Violations

- **Line 63**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isSelectiveWithTables = $mode === RestoreModeType::Selective->value && !empty($selectedTables);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

