# Subtask 254: Fix violations in wp-plugins/riseup-asia-uploader/tests/Unit/Update/SelfUpdateValidatorTest.php

Target File: `wp-plugins/riseup-asia-uploader/tests/Unit/Update/SelfUpdateValidatorTest.php`

## Violations

- **Line 75**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($error['code'] === SelfUpdateStatusType::CriticalFileMissing->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 124**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$syntaxErrors = array_filter($errors, fn($e) => $e['code'] === SelfUpdateStatusType::SyntaxError->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] SKIPPED (False Positive)
