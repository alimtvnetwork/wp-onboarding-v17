# Subtask 608: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/User/UserImportSqliteTrait.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/User/UserImportSqliteTrait.php`

## Violations

- **Line 117**: abbreviations - Invalid abbreviation casing
  `$updateResult = $this->updateUserFromSqlite($existingUser->ID, $sqliteUser, $pdo);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 174**: abbreviations - Invalid abbreviation casing
  `$wpdb->update($wpdb->users, ['user_pass' => $sqliteUser['password_hash']], ['ID' => $newUserId]);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 185**: abbreviations - Invalid abbreviation casing
  `$userdata = ['ID' => $userId];`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 212**: abbreviations - Invalid abbreviation casing
  `$wpdb->update($wpdb->users, ['user_pass' => $sqliteUser['password_hash']], ['ID' => $userId]);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

