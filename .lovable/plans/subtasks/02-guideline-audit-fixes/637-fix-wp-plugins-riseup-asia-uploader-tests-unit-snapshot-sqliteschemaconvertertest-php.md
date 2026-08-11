# Subtask 637: Fix violations in wp-plugins/riseup-asia-uploader/tests/Unit/Snapshot/SqliteSchemaConverterTest.php

Target File: `wp-plugins/riseup-asia-uploader/tests/Unit/Snapshot/SqliteSchemaConverterTest.php`

## Violations

- **Line 14**: abbreviations - Invalid abbreviation casing
  `$mysql = "CREATE TABLE `wp_posts` (\n  `ID` BIGINT(20) NOT NULL,\n  `post_status` TINYINT(1) DEFAULT 0\n) ENGINE=InnoDB";`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

