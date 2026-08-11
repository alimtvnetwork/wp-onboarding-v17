# Subtask 056: Fix violations in wp-plugins/riseup-asia-uploader/vendor/sebastian/lines-of-code/src/LineCountingVisitor.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/sebastian/lines-of-code/src/LineCountingVisitor.php`

## Violations

- **Line 65**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$nonCommentLinesOfCode = $this->linesOfCode - $commentLinesOfCode;`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 69**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `assert($nonCommentLinesOfCode >= 0);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 74**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$nonCommentLinesOfCode,`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

