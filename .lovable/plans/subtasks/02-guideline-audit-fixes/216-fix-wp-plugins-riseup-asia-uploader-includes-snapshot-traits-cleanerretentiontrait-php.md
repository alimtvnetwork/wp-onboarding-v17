# Subtask 216: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/CleanerRetentionTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/CleanerRetentionTrait.php`

## Violations

- **Line 40**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isDaysRetention = ($settings[SettingsKeyType::RetentionType->value] === RetentionType::Days->value && !empty($settings[SettingsKeyType::RetentionDays->value]));`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 49**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isCountRetention = ($settings[SettingsKeyType::RetentionType->value] === RetentionType::Count->value && !empty($settings[SettingsKeyType::RetentionCount->value]));`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

