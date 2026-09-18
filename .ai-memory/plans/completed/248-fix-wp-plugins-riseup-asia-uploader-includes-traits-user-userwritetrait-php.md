# Subtask 248: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/User/UserWriteTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/User/UserWriteTrait.php`

## Violations

- **Line 92**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasSocial = isset($body['Social']) && gettype($body['Social']) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 99**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasYoast = isset($body['Yoast']) && gettype($body['Yoast']) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 261**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasSocial = isset($body['Social']) && gettype($body['Social']) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 269**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasYoast = isset($body['Yoast']) && gettype($body['Yoast']) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 36**: abbreviations - Invalid abbreviation casing
  `return $this->validationError('Invalid or missing JSON body', $request);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 116**: abbreviations - Invalid abbreviation casing
  `$appPassName = sanitize_text_field($body['AppPasswordName'] ?? 'API Access');`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 167**: abbreviations - Invalid abbreviation casing
  `return $this->validationError('Invalid or missing JSON body', $request);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 170**: abbreviations - Invalid abbreviation casing
  `$userdata = ['ID' => $userId];`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] SKIPPED (False Positive)
