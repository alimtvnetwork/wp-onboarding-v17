# Subtask 229: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/SchedulerCronTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/SchedulerCronTrait.php`

## Violations

- **Line 105**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($snapshotType === SnapshotModeType::Incremental->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] SKIPPED (False Positive)
