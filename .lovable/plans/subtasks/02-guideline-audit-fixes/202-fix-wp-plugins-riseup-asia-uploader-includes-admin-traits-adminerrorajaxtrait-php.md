# Subtask 202: Fix violations in wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminErrorAjaxTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminErrorAjaxTrait.php`

## Violations

- **Line 96**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($type === AdminTabType::Log->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 100**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($type === AdminTabType::Error->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 104**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($type === AdminTabType::Stacktrace->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 190**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$deletedFiles = isset($clearResult['deleted']) && gettype($clearResult['deleted']) === PhpNativeType::PhpArray->value ? $clearResult['deleted'] : [];`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 191**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$failedFiles = isset($clearResult['failed']) && gettype($clearResult['failed']) === PhpNativeType::PhpArray->value ? $clearResult['failed'] : [];`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 241**: php-raw-throwable - Leading backslash on Throwable
  `} catch (\Throwable $e) {`
  **Instruction**: Remove the leading backslash and add `use Throwable;` at the top of the file.

- **Line 261**: php-raw-throwable - Leading backslash on Throwable
  `} catch (\Throwable $e) {`
  **Instruction**: Remove the leading backslash and add `use Throwable;` at the top of the file.

- **Line 273**: php-raw-throwable - Leading backslash on Throwable
  `} catch (\Throwable $e) {`
  **Instruction**: Remove the leading backslash and add `use Throwable;` at the top of the file.

