# Subtask 210: Fix violations in wp-plugins/riseup-asia-uploader/includes/Logging/FileLogger.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Logging/FileLogger.php`

## Violations

- **Line 125**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasLogging = isset($settings['logging']) && gettype($settings['logging']) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

