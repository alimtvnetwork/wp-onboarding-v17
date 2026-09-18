# Subtask 048: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Metadata/Api/HookMethods.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Metadata/Api/HookMethods.php`

## Violations

- **Line 64**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($metadata->isBeforeClass()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 73**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($metadata->isAfterClass()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 83**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($metadata->isBefore()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 92**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($metadata->isPreCondition()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 101**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($metadata->isPostCondition()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 110**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($metadata->isAfter()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.


[x] FIXED
