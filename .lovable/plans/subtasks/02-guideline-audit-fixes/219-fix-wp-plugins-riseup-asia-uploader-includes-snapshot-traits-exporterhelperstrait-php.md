# Subtask 219: Fix violations in wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/ExporterHelpersTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Snapshot/Traits/ExporterHelpersTrait.php`

## Violations

- **Line 52**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `if ($snapshot['Scope'] === SnapshotModeType::Incremental->value) {`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 25**: abbreviations - Invalid abbreviation casing
  `/** Get a full snapshot record by ID (validates it's not incremental). */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 88**: abbreviations - Invalid abbreviation casing
  `/** Get an export record by ID. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

