# Subtask 214: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/SnapshotCleaner.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/SnapshotCleaner.php`

## Violations

- **Line 117**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($settings[SettingsKeyType::RetentionType->value] === RetentionType::None->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] SKIPPED (False Positive)
