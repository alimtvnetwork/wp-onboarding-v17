# Subtask 256: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/Log/LogClearAllTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/Log/LogClearAllTrait.php`

## Violations

- **Line 82**: php-raw-throwable - Leading backslash on Throwable
  `} catch (\Throwable $e) {`
  **Instruction**: Remove the leading backslash and add `use Throwable;` at the top of the file.

- **Line 113**: php-raw-throwable - Leading backslash on Throwable
  `} catch (\Throwable $e) {`
  **Instruction**: Remove the leading backslash and add `use Throwable;` at the top of the file.

