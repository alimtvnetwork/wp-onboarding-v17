# Subtask 196: Fix violations in wp-plugins/qupload/includes/Helpers/PathHelper.php

Target File: `wp-plugins/qupload/includes/Helpers/PathHelper.php`

## Violations

- **Line 82**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if (gettype($uploadDir) === PhpNativeType::PhpArray->value && isset($uploadDir['basedir']) && gettype($uploadDir['basedir']) === PhpNativeType::PhpString->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

