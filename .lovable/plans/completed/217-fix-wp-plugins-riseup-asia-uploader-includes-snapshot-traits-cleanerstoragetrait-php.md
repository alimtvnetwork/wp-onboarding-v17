# Subtask 217: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/CleanerStorageTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/CleanerStorageTrait.php`

## Violations

- **Line 122**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($settings[SettingsKeyType::RetentionType->value] === RetentionType::Days->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 124**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `} elseif ($settings[SettingsKeyType::RetentionType->value] === RetentionType::Count->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).


[x] SKIPPED (False Positive)
