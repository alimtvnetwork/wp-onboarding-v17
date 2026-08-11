# Subtask 243: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/Upload/UploadInstallExtractCoreTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/Upload/UploadInstallExtractCoreTrait.php`

## Violations

- **Line 168**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isSelfUpdate = ($slug === PluginConfigType::Slug->value && $isUpdate);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

