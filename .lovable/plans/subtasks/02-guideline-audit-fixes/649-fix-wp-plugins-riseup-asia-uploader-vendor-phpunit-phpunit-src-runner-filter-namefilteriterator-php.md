# Subtask 649: Fix violations in wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Runner/Filter/NameFilterIterator.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/phpunit/phpunit/src/Runner/Filter/NameFilterIterator.php`

## Violations

- **Line 110**: abbreviations - Invalid abbreviation casing
  `//  * testDetermineJsonError@JSON.*`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

