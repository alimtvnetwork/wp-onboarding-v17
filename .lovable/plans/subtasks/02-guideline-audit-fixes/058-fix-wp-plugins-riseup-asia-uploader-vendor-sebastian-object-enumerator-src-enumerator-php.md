# Subtask 058: Fix violations in wp-plugins/riseup-asia-uploader/vendor/sebastian/object-enumerator/src/Enumerator.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/sebastian/object-enumerator/src/Enumerator.php`

## Violations

- **Line 39**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `/** @phpstan-ignore foreach.nonIterable */`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

