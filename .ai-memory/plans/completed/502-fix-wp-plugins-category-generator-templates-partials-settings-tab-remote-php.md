Status: completed

# Subtask 502: Fix violations in wp-plugins/category-generator/templates/partials/settings-tab-remote.php

Target File: `wp-plugins/category-generator/templates/partials/settings-tab-remote.php`

## Violations

- **Line 48**: abbreviations - Invalid abbreviation casing
  `<h3><?php _e('Add New API', 'category-generator'); ?></h3>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 51**: abbreviations - Invalid abbreviation casing
  `<label for="new_api_name"><?php _e('API Name', 'category-generator'); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 56**: abbreviations - Invalid abbreviation casing
  `<label for="new_api_url"><?php _e('API URL', 'category-generator'); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 61**: abbreviations - Invalid abbreviation casing
  `<label for="new_api_key"><?php _e('API Key (optional)', 'category-generator'); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 67**: abbreviations - Invalid abbreviation casing
  `<?php _e('Add API', 'category-generator'); ?>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

