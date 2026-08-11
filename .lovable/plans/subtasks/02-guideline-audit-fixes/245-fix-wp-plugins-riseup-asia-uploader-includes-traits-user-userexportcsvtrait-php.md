# Subtask 245: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/User/UserExportCsvTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/User/UserExportCsvTrait.php`

## Violations

- **Line 131**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$row[] = gettype($value) === PhpNativeType::PhpString->value ? $value : '';`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 137**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$row[] = gettype($value) === PhpNativeType::PhpString->value ? $value : '';`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 37**: abbreviations - Invalid abbreviation casing
  `'orderby' => 'ID',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 115**: abbreviations - Invalid abbreviation casing
  `$user->ID,`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 119**: abbreviations - Invalid abbreviation casing
  `get_user_meta($user->ID, 'first_name', true) ?: '',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 120**: abbreviations - Invalid abbreviation casing
  `get_user_meta($user->ID, 'last_name', true) ?: '',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 122**: abbreviations - Invalid abbreviation casing
  `get_user_meta($user->ID, 'nickname', true) ?: '',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 124**: abbreviations - Invalid abbreviation casing
  `get_user_meta($user->ID, 'description', true) ?: '',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 130**: abbreviations - Invalid abbreviation casing
  `$value = get_user_meta($user->ID, $meta->value, true);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 136**: abbreviations - Invalid abbreviation casing
  `$value = get_user_meta($user->ID, $meta->value, true);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

