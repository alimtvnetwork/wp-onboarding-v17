Status: completed

# Subtask 495: Fix violations in wp-plugins/category-generator/templates/partials/business-profile-form.php

Target File: `wp-plugins/category-generator/templates/partials/business-profile-form.php`

## Violations

- **Line 40**: abbreviations - Invalid abbreviation casing
  `<label for="bp-website"><?php _e('Website URL', 'category-generator'); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 153**: abbreviations - Invalid abbreviation casing
  `<label for="bp-logo"><?php _e('Logo URL', 'category-generator'); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 158**: abbreviations - Invalid abbreviation casing
  `<label for="bp-image"><?php _e('Business Image URL', 'category-generator'); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 166**: abbreviations - Invalid abbreviation casing
  `<span class="<?php echo esc_attr(CG_CSS::TEXT_HINT); ?>"><?php _e('One URL per line', 'category-generator'); ?></span>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

