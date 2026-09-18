# Subtask 220: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/ManagerRestoreTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/ManagerRestoreTrait.php`

## Violations

- **Line 41**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isBackupError = gettype($backupId) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).


[x] SKIPPED (False Positive)

