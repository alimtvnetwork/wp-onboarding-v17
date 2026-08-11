# Subtask 639: Fix violations in wp-plugins/riseup-asia-uploader/vendor/nikic/php-parser/lib/PhpParser/JsonDecoder.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/nikic/php-parser/lib/PhpParser/JsonDecoder.php`

## Violations

- **Line 13**: abbreviations - Invalid abbreviation casing
  `throw new \RuntimeException('JSON decoding error: ' . json_last_error_msg());`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

