# Subtask 039: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Event/Emitter/DispatchingEmitter.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Event/Emitter/DispatchingEmitter.php`

## Violations

- **Line 790**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($test->metadata()->isIgnorePhpunitDeprecations()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 1212**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if (TestMethodBuilder::fromCallStack()->metadata()->isIgnorePhpunitDeprecations()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 20**: php-raw-throwable - Leading backslash on Throwable
  `use PHPUnit\Event\Code\Throwable;`
  **Instruction**: Remove the leading backslash and add `use Throwable;` at the top of the file.

[x] SKIPPED (False Positive)
