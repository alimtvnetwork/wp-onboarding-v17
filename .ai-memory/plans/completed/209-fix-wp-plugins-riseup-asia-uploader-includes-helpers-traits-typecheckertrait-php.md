# Subtask 209: Fix violations in wp-plugins/riseup-asia-uploader/includes/Helpers/Traits/TypeCheckerTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Helpers/Traits/TypeCheckerTrait.php`

## Violations

- **Line 32**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `return gettype($value) === PhpNativeType::PhpString->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 39**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `return gettype($value) === PhpNativeType::PhpInteger->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 46**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `return gettype($value) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 53**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `return gettype($value) === PhpNativeType::PhpBoolean->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 62**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `return $type === PhpNativeType::PhpInteger->value || $type === PhpNativeType::PhpDouble->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 102**: abbreviations - Invalid abbreviation casing
  `* Validate that the request body exists and is a JSON object (array).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] FIXED
