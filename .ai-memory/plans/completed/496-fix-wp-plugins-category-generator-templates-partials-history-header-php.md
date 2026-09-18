Status: completed

# Subtask 496: Fix violations in wp-plugins/category-generator/templates/partials/history-header.php

Target File: `wp-plugins/category-generator/templates/partials/history-header.php`

## Violations

- **Line 39**: abbreviations - Invalid abbreviation casing
  `<li><label><input type="checkbox" class="cg-col-toggle" data-col="<?php echo CG_CSS::COLUMN_ID; ?>"> <?php _e('ID', 'category-generator'); ?></label></li>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

