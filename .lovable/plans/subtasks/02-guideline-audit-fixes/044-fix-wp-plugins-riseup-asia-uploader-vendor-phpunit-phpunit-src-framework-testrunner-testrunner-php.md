# Subtask 044: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Framework/TestRunner/TestRunner.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Framework/TestRunner/TestRunner.php`

## Violations

- **Line 330**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if (MetadataRegistry::parser()->forMethod($test::class, $test->name())->isWithoutErrorHandler()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

