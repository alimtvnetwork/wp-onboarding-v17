# Subtask 197: Fix violations in wp-plugins/qupload/includes/Traits/Core/ResponseTrait.php

Target File: `wp-plugins/qupload/includes/Traits/Core/ResponseTrait.php`

## Violations

- **Line 198**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if (gettype($code) === PhpNativeType::PhpInteger->value && $code > 0) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] SKIPPED (False Positive)
