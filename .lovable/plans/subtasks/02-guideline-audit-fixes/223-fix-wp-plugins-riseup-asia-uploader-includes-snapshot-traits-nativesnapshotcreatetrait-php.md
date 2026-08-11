# Subtask 223: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/NativeSnapshotCreateTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/NativeSnapshotCreateTrait.php`

## Violations

- **Line 87**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($scope === SnapshotScopeType::Full->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

