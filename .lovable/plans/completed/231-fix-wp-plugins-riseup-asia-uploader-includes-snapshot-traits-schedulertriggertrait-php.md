# Subtask 231: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/SchedulerTriggerTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/SchedulerTriggerTrait.php`

## Violations

- **Line 73**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$title = $options[ResponseKeyType::Title->value] ?? ($snapshotType === SnapshotModeType::Incremental->value`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] SKIPPED (False Positive)
