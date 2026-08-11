# Subtask 647: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Framework/Constraint/JsonMatches.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Framework/Constraint/JsonMatches.php`

## Violations

- **Line 37**: abbreviations - Invalid abbreviation casing
  `'matches JSON string "%s"',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

