# Subtask 013: Fix violations in wp-plugins/riseup-asia-uploader/includes/Autoloader.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Autoloader.php`

## Violations

- **Line 82**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$isNotPhp = ($fileInfo->getExtension() !== 'php');`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 83**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($isNotPhp) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

[x] FIXED
