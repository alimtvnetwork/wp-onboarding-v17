# Subtask 239: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/SiteSettings/SiteHealthSummaryTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/SiteSettings/SiteHealthSummaryTrait.php`

## Violations

- **Line 156**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `return gettype($snapshots) === PhpNativeType::PhpArray->value ? count($snapshots) : 0;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 173**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `return gettype($history) === PhpNativeType::PhpArray->value ? count($history) : 0;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 200**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if (gettype($tables) === PhpNativeType::PhpArray->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

