# Subtask 208: Fix violations in wp-plugins/riseup-asia-uploader/includes/Helpers/SettingsMigrationHelper.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Helpers/SettingsMigrationHelper.php`

## Violations

- **Line 139**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasField = isset($settings[$field]) && gettype($settings[$field]) === PhpNativeType::PhpString->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

