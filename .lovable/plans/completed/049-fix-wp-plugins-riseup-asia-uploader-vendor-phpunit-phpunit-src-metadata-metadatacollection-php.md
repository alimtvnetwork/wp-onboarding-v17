# Subtask 049: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Metadata/MetadataCollection.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Metadata/MetadataCollection.php`

## Violations

- **Line 63**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `public function isNotEmpty(): bool`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

[x] SKIPPED (False Positive)
