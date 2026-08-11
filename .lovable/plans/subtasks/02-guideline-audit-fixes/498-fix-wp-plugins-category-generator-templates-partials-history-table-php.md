# Subtask 498: Fix violations in wp-plugins/category-generator/templates/partials/history-table.php

Target File: `wp-plugins/category-generator/templates/partials/history-table.php`

## Violations

- **Line 22**: abbreviations - Invalid abbreviation casing
  `<th class="<?php echo CG_CSS::COLUMN_ID; ?>" style="width: 50px;"><?php _e('ID', 'category-generator'); ?></th>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

