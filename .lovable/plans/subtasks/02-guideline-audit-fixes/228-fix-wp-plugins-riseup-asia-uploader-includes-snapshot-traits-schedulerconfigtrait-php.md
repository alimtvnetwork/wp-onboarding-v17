# Subtask 228: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/SchedulerConfigTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/SchedulerConfigTrait.php`

## Violations

- **Line 69**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isManualFrequency = ($frequency === SnapshotFrequencyType::Manual->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

