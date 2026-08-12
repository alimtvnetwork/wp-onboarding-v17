# Subtask 233: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/WorkerProgressTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/WorkerProgressTrait.php`

## Violations

- **Line 74**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `($status === SnapshotStatusType::Complete->value || $status === SnapshotStatusType::Failed->value) ? $now : null,`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] SKIPPED (False Positive)
