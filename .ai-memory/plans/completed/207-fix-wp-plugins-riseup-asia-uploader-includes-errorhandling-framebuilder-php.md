# Subtask 207: Fix violations in wp-plugins/riseup-asia-uploader/includes/ErrorHandling/FrameBuilder.php

Target File: `wp-plugins/riseup-asia-uploader/includes/ErrorHandling/FrameBuilder.php`

## Violations

- **Line 96**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if (gettype($backtrace) === PhpNativeType::PhpArray->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 129**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if (gettype($backtrace) === PhpNativeType::PhpArray->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).


[x] SKIPPED (False Positive)
