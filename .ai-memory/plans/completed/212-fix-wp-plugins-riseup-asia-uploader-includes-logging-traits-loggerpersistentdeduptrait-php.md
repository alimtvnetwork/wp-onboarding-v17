# Subtask 212: Fix violations in wp-plugins/riseup-asia-uploader/includes/Logging/Traits/LoggerPersistentDedupTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Logging/Traits/LoggerPersistentDedupTrait.php`

## Violations

- **Line 95**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasHashes = isset($data['hashes']) && gettype($data['hashes']) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 3**: abbreviations - Invalid abbreviation casing
  `* Logger Persistent Dedup Trait — JSON-backed cross-request deduplication for Info logs.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 5**: abbreviations - Invalid abbreviation casing
  `* Stores MD5 hashes of previously logged Info messages in a JSON registry file.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 151**: abbreviations - Invalid abbreviation casing
  `/** Resolve the full path to the dedup registry JSON file. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] FIXED
[x] SKIPPED (False Positive)
