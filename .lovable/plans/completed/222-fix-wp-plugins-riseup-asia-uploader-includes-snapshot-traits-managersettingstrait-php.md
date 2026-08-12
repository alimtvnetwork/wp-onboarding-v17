# Subtask 222: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/ManagerSettingsTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/ManagerSettingsTrait.php`

## Violations

- **Line 113**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$type = gettype($value) === PhpNativeType::PhpBoolean->value ? 'bool' : (gettype($value) === PhpNativeType::PhpInteger->value ? 'int' : 'string');`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 114**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$dbValue = gettype($value) === PhpNativeType::PhpBoolean->value ? ($value ? '1' : '0') : (string)$value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).


[x] SKIPPED (False Positive)

