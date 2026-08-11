# Subtask 250: Fix violations in wp-plugins/riseup-asia-uploader/includes/templates/admin-license.php

Target File: `wp-plugins/riseup-asia-uploader/includes/templates/admin-license.php`

## Violations

- **Line 23**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isActive      = ($licenseStatus === LicenseStatusType::Active->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

