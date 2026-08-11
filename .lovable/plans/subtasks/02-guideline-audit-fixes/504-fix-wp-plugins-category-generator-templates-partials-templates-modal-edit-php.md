# Subtask 504: Fix violations in wp-plugins/category-generator/templates/partials/templates-modal-edit.php

Target File: `wp-plugins/category-generator/templates/partials/templates-modal-edit.php`

## Violations

- **Line 81**: abbreviations - Invalid abbreviation casing
  `<label for="tpl-schema-content"><?php _e('Schema JSON-LD', 'category-generator'); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

