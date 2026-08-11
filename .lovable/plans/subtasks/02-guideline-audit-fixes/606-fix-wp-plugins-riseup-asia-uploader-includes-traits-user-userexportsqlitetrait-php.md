# Subtask 606: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/User/UserExportSqliteTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/User/UserExportSqliteTrait.php`

## Violations

- **Line 51**: abbreviations - Invalid abbreviation casing
  `$userQuery = new WP_User_Query(['number' => -1, 'orderby' => 'ID', 'order' => 'ASC']);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 134**: abbreviations - Invalid abbreviation casing
  `$user->ID,`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 138**: abbreviations - Invalid abbreviation casing
  `get_user_meta($user->ID, 'first_name', true) ?: '',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 139**: abbreviations - Invalid abbreviation casing
  `get_user_meta($user->ID, 'last_name', true) ?: '',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 141**: abbreviations - Invalid abbreviation casing
  `get_user_meta($user->ID, 'nickname', true) ?: '',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 143**: abbreviations - Invalid abbreviation casing
  `get_user_meta($user->ID, 'description', true) ?: '',`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 150**: abbreviations - Invalid abbreviation casing
  `$value = get_user_meta($user->ID, $meta->value, true);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 154**: abbreviations - Invalid abbreviation casing
  `$socialStmt->execute([$user->ID, $meta->jsonKey(), $value]);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 160**: abbreviations - Invalid abbreviation casing
  `$value = get_user_meta($user->ID, $meta->value, true);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 164**: abbreviations - Invalid abbreviation casing
  `$yoastStmt->execute([$user->ID, $meta->jsonKey(), $value]);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

