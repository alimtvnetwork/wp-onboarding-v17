# Subtask 011: Fix violations in wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminNoticesTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminNoticesTrait.php`

## Violations

- **Line 43**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$hasNoFailures = ((int) ($diagnostics['failed_count'] ?? 0) === 0);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 44**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$hasNoRuntimeFailures = (count($diagnostics['runtime_failures'] ?? []) === 0);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 46**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($hasNoFailures && $hasNoRuntimeFailures) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

[x] FIXED
