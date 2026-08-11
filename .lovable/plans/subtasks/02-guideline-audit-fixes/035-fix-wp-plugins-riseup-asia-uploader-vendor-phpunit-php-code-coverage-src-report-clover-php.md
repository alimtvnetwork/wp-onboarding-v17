# Subtask 035: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/php-code-coverage/src/Report/Clover.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/php-code-coverage/src/Report/Clover.php`

## Violations

- **Line 172**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$xmlMetrics->setAttribute('ncloc', (string) $linesOfCode['nonCommentLinesOfCode']);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 205**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$xmlMetrics->setAttribute('ncloc', (string) $linesOfCode['nonCommentLinesOfCode']);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

