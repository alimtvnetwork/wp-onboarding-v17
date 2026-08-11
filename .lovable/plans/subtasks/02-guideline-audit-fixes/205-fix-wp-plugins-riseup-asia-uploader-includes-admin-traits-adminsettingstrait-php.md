# Subtask 205: Fix violations in wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminSettingsTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminSettingsTrait.php`

## Violations

- **Line 48**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasEndpoints = !empty($input['endpoints'] ?? null) && gettype($input['endpoints']) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 59**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if (isset($input['log_retrieval']) && gettype($input['log_retrieval']) === PhpNativeType::PhpArray->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 111**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isSettingsArray = gettype($settings) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 124**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasEnabledFlag = (gettype($endpointConfig) === PhpNativeType::PhpArray->value && array_key_exists('enabled', $endpointConfig));`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 137**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasAuthFlag = (gettype($endpointConfig) === PhpNativeType::PhpArray->value && array_key_exists('auth_required', $endpointConfig));`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

