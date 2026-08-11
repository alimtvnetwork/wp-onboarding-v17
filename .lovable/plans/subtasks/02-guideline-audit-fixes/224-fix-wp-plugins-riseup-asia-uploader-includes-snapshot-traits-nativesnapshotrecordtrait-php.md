# Subtask 224: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/NativeSnapshotRecordTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/NativeSnapshotRecordTrait.php`

## Violations

- **Line 157**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($status === SnapshotStatusType::Running->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

