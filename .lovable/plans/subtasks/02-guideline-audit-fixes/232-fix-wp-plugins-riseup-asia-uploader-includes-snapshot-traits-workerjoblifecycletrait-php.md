# Subtask 232: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/WorkerJobLifecycleTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/WorkerJobLifecycleTrait.php`

## Violations

- **Line 94**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$completed = ($status === SnapshotJobStatusType::Complete->value || $status === SnapshotJobStatusType::Failed->value) ? $now : null;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

