# Subtask 014: Fix violations in wp-plugins/riseup-asia-uploader/includes/ErrorHandling/BootErrorCollector.php

Target File: `wp-plugins/riseup-asia-uploader/includes/ErrorHandling/BootErrorCollector.php`

## Violations

- **Line 86**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$hasNoErrors = (count($this->errors) === 0);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 88**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($hasNoErrors) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

[x] FIXED
