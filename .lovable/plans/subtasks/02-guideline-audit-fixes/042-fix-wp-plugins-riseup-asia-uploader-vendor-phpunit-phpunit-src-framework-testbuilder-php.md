# Subtask 042: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Framework/TestBuilder.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Framework/TestBuilder.php`

## Violations

- **Line 162**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($metadataForMethod->isBackupGlobals()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 170**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `} elseif ($metadataForClass->isBackupGlobals()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 189**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($metadataForMethod->isBackupStaticProperties()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 197**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `} elseif ($metadataForClass->isBackupStaticProperties()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 233**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($metadataForMethod->isPreserveGlobalState()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 243**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($metadataForClass->isPreserveGlobalState()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 260**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if (MetadataRegistry::parser()->forClass($className)->isRunTestsInSeparateProcesses()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 264**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if (MetadataRegistry::parser()->forMethod($className, $methodName)->isRunInSeparateProcess()->isNotEmpty()) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 276**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `return MetadataRegistry::parser()->forClass($className)->isRunClassInSeparateProcess()->isNotEmpty();`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

