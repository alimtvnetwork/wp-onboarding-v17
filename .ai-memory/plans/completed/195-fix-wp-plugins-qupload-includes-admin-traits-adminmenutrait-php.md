# Subtask 195: Fix violations in wp-plugins/qupload/includes/Admin/Traits/AdminMenuTrait.php

Target File: `wp-plugins/qupload/includes/Admin/Traits/AdminMenuTrait.php`

## Violations

- **Line 103**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($currentPage === AdminPageType::Errors->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] SKIPPED (False Positive)
