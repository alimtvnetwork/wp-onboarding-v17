# Subtask 040: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Event/Events/EventCollection.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Event/Events/EventCollection.php`

## Violations

- **Line 53**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `public function isNotEmpty(): bool`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

