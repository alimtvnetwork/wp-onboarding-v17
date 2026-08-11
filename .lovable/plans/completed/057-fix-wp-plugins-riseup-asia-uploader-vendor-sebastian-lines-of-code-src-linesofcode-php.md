# Subtask 057: Fix violations in wp-plugins/riseup-asia-uploader/vendor/sebastian/lines-of-code/src/LinesOfCode.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/sebastian/lines-of-code/src/LinesOfCode.php`

## Violations

- **Line 30**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `private int $nonCommentLinesOfCode;`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 40**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `* @param non-negative-int $nonCommentLinesOfCode`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 46**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `public function __construct(int $linesOfCode, int $commentLinesOfCode, int $nonCommentLinesOfCode, int $logicalLinesOfCode)`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 59**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($nonCommentLinesOfCode < 0) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 60**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `throw new NegativeValueException('$nonCommentLinesOfCode must not be negative');`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 68**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($linesOfCode - $commentLinesOfCode !== $nonCommentLinesOfCode) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 69**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `throw new IllogicalValuesException('$linesOfCode !== $commentLinesOfCode + $nonCommentLinesOfCode');`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 74**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$this->nonCommentLinesOfCode = $nonCommentLinesOfCode;`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 97**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `public function nonCommentLinesOfCode(): int`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 99**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `return $this->nonCommentLinesOfCode;`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 115**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$this->nonCommentLinesOfCode() + $other->nonCommentLinesOfCode(),`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

[x] SKIPPED (False Positive)
