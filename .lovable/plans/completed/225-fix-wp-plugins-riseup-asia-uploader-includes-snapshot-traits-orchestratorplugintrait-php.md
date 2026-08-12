# Subtask 225: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/OrchestratorPluginTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/OrchestratorPluginTrait.php`

## Violations

- **Line 91**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($slug === PluginConfigType::Slug->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 95**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isEligible = ($selection === PluginSelectionType::All->value || in_array($pluginFile, $activePlugins));`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] SKIPPED (False Positive)
