# Subtask 252: Fix violations in wp-plugins/riseup-asia-uploader/templates/admin-license.php

Target File: `wp-plugins/riseup-asia-uploader/templates/admin-license.php`

## Violations

- **Line 23**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isActive = ($licenseStatus === LicenseStatusType::Active->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 24**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isInactive = ($licenseStatus === LicenseStatusType::Inactive->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 25**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isExpired = ($licenseStatus === LicenseStatusType::Expired->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

