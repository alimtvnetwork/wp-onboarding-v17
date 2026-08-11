# Subtask 500: Fix violations in wp-plugins/category-generator/templates/partials/settings-tab-ai.php

Target File: `wp-plugins/category-generator/templates/partials/settings-tab-ai.php`

## Violations

- **Line 16**: abbreviations - Invalid abbreviation casing
  `<p class="<?php echo esc_attr(CG_CSS::TEXT_DESCRIPTION); ?>"><?php _e('Configure AI providers for generating content. API keys are stored securely.', 'category-generator'); ?></p>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 37**: abbreviations - Invalid abbreviation casing
  `<label><?php _e('API Key / Token', 'category-generator'); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 45**: abbreviations - Invalid abbreviation casing
  `<label><?php _e('Custom API URL', 'category-generator'); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

