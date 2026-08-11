# Subtask 274: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Event/Value/ThrowableBuilder.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Event/Value/ThrowableBuilder.php`

## Violations

- **Line 28**: php-raw-throwable - Leading backslash on Throwable
  `public static function from(\Throwable $t): Throwable`
  **Instruction**: Remove the leading backslash and add `use Throwable;` at the top of the file.

