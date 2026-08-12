# Subtask 238: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/Plugin/PluginLifecycleHelpersTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/Plugin/PluginLifecycleHelpersTrait.php`

## Violations

- **Line 86**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($slug === PluginConfigType::Slug->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).


[x] SKIPPED (False Positive)
