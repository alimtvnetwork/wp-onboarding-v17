# Subtask 253: Fix violations in wp-plugins/riseup-asia-uploader/templates/partials/settings/section-snapshot-retention.php

Target File: `wp-plugins/riseup-asia-uploader/templates/partials/settings/section-snapshot-retention.php`

## Violations

- **Line 69**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `<label class="riseup-mode-card" id="mode_card_single" style="flex: 1; cursor: pointer; padding: 12px; border: 2px solid <?php echo $storageMode === StorageModeType::Single->value ? '#2271b1' : '#dcdcde'; ?>; border-radius: 8px; background: <?php echo $storageMode === StorageModeType::Single->value ? '#f0f6fc' : '#fff'; ?>; transition: all 0.2s;">`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 75**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `<label class="riseup-mode-card" id="mode_card_pertable" style="flex: 1; cursor: pointer; padding: 12px; border: 2px solid <?php echo $storageMode === StorageModeType::PerTable->value ? '#2271b1' : '#dcdcde'; ?>; border-radius: 8px; background: <?php echo $storageMode === StorageModeType::PerTable->value ? '#f0f6fc' : '#fff'; ?>; transition: all 0.2s;">`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

