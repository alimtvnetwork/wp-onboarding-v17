# Subtask 215: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/CleanerHelperTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/CleanerHelperTrait.php`

## Violations

- **Line 48**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if (gettype($saved) === PhpNativeType::PhpArray->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] SKIPPED (False Positive)
