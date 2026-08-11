# Subtask 505: Fix violations in wp-plugins/category-generator/templates/partials/templates-tab-html.php

Target File: `wp-plugins/category-generator/templates/partials/templates-tab-html.php`

## Violations

- **Line 34**: abbreviations - Invalid abbreviation casing
  `<th style="width: 50px;"><?php _e('ID', 'category-generator'); ?></th>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 80**: abbreviations - Invalid abbreviation casing
  `<code><?php echo CG_Constants::PLACEHOLDER_SLUG; ?></code> - URL slug<br>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 81**: abbreviations - Invalid abbreviation casing
  `<code><?php echo CG_Constants::PLACEHOLDER_URL; ?></code> - Category URL<br>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 88**: abbreviations - Invalid abbreviation casing
  `<code>{contact_url}</code> - Contact page URL<br>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

