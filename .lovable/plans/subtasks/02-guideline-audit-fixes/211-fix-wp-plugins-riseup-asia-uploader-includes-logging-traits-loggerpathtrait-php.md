# Subtask 211: Fix violations in wp-plugins/riseup-asia-uploader/includes/Logging/Traits/LoggerPathTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Logging/Traits/LoggerPathTrait.php`

## Violations

- **Line 124**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$filteredFiles = array_filter($allFiles, fn($file) => gettype($file) === PhpNativeType::PhpString->value && $file !== '');`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

