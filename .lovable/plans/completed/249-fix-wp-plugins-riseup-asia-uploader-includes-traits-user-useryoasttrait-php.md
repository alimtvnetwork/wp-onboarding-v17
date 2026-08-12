# Subtask 249: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/User/UserYoastTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/User/UserYoastTrait.php`

## Violations

- **Line 57**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$result[$meta->jsonKey()] = gettype($value) === PhpNativeType::PhpString->value ? $value : '';`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).


[x] SKIPPED (False Positive)
