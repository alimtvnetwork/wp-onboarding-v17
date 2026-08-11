# Subtask 203: Fix violations in wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminErrorStateTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminErrorStateTrait.php`

## Violations

- **Line 80**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($currentPage === AdminPageType::Errors->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

