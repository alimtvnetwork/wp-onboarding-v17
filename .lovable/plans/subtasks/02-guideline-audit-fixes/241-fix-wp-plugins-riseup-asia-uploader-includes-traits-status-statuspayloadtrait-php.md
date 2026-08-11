# Subtask 241: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/Status/StatusPayloadTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/Status/StatusPayloadTrait.php`

## Violations

- **Line 118**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$methods = array_merge($methods, gettype($handler['methods']) === PhpNativeType::PhpArray->value`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

