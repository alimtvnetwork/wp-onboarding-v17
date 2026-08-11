# Subtask 037: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/php-code-coverage/src/StaticAnalysis/FileAnalyser.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/php-code-coverage/src/StaticAnalysis/FileAnalyser.php`

## Violations

- **Line 23**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `*     nonCommentLinesOfCode: int`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

