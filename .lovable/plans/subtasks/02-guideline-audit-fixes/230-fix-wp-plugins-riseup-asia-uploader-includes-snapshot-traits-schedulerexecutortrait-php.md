# Subtask 230: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/SchedulerExecutorTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/SchedulerExecutorTrait.php`

## Violations

- **Line 59**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$action = ($snapshotType === SnapshotModeType::Incremental->value) ? ActionType::SnapshotIncremental->value : ActionType::SnapshotFullBackup->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

