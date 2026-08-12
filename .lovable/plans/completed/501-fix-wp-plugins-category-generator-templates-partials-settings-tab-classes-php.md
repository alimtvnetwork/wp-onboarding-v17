Status: completed

# Subtask 501: Fix violations in wp-plugins/category-generator/templates/partials/settings-tab-classes.php

Target File: `wp-plugins/category-generator/templates/partials/settings-tab-classes.php`

## Violations

- **Line 46**: abbreviations - Invalid abbreviation casing
  `<span class="<?php echo esc_attr(CG_CSS::TEXT_HINT); ?>"><?php _e('Applied to the div containing JSON-LD schema', 'category-generator'); ?></span>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

