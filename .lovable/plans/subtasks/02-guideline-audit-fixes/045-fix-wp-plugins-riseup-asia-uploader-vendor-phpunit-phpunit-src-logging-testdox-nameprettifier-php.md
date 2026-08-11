# Subtask 045: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Logging/TestDox/NamePrettifier.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Logging/TestDox/NamePrettifier.php`

## Violations

- **Line 70**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($classLevelTestDox->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 178**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($methodLevelTestDox->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

