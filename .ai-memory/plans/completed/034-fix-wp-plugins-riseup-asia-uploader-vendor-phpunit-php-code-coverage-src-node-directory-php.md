# Subtask 034: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/php-code-coverage/src/Node/Directory.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/php-code-coverage/src/Node/Directory.php`

## Violations

- **Line 177**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `'nonCommentLinesOfCode' => 0,`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 185**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$this->linesOfCode['nonCommentLinesOfCode'] += $childLinesOfCode['nonCommentLinesOfCode'];`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

[x] SKIPPED (False Positive)
