# Subtask 038: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/php-code-coverage/src/StaticAnalysis/ParsingFileAnalyser.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/php-code-coverage/src/StaticAnalysis/ParsingFileAnalyser.php`

## Violations

- **Line 220**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `'nonCommentLinesOfCode' => $result->nonCommentLinesOfCode(),`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

