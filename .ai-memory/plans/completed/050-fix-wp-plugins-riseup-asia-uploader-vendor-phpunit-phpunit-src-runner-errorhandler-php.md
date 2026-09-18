# Subtask 050: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Runner/ErrorHandler.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Runner/ErrorHandler.php`

## Violations

- **Line 118**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$ignoredByTest     = $test->metadata()->isIgnoreDeprecations()->isNotEmpty();`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

[x] SKIPPED (False Positive)
