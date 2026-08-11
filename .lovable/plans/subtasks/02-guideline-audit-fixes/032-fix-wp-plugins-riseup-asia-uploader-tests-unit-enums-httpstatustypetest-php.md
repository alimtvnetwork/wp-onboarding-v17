# Subtask 032: Fix violations in wp-plugins/riseup-asia-uploader/tests/Unit/Enums/HttpStatusTypeTest.php

Target File: `wp-plugins/riseup-asia-uploader/tests/Unit/Enums/HttpStatusTypeTest.php`

## Violations

- **Line 53**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$nonRetryable = [HttpStatusType::BadRequest, HttpStatusType::NotFound, HttpStatusType::Ok];`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 58**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `foreach ($nonRetryable as $code) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

