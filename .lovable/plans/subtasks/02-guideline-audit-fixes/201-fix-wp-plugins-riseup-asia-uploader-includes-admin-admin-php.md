# Subtask 201: Fix violations in wp-plugins/riseup-asia-uploader/includes/Admin/Admin.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Admin/Admin.php`

## Violations

- **Line 102**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `return array_replace_recursive(self::$defaults, gettype($saved) === PhpNativeType::PhpArray->value ? $saved : []);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

