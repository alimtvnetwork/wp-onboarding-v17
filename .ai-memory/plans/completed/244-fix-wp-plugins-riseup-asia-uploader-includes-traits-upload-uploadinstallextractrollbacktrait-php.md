# Subtask 244: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/Upload/UploadInstallExtractRollbackTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/Upload/UploadInstallExtractRollbackTrait.php`

## Violations

- **Line 119**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$diagnosticsKey = $reason->isHealthCheckError() || $reason === SelfUpdateStatusType::HealthCheckFailed`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

[x] FIXED
