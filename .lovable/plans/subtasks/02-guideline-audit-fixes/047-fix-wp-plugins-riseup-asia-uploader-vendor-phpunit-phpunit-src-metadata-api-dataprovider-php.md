# Subtask 047: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Metadata/Api/DataProvider.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Metadata/Api/DataProvider.php`

## Violations

- **Line 68**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($dataProvider->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

