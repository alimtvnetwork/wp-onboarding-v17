# Subtask 617: Fix violations in wp-plugins/riseup-asia-uploader/templates/admin-agents.php

Target File: `wp-plugins/riseup-asia-uploader/templates/admin-agents.php`

## Violations

- **Line 46**: abbreviations - Invalid abbreviation casing
  `<label for="agent_url"><?php esc_html_e('Site URL', $pluginSlug); ?> <span class="required">*</span></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 51**: abbreviations - Invalid abbreviation casing
  `<p class="description"><?php esc_html_e('The WordPress site URL (without /wp-admin)', $pluginSlug); ?></p>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 77**: abbreviations - Invalid abbreviation casing
  `<label for="agent_redirect_url"><?php esc_html_e('Redirect URL (Optional)', $pluginSlug); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 83**: abbreviations - Invalid abbreviation casing
  `<?php esc_html_e('If the site URL may change, provide a 301 redirect URL that will resolve to the current location.', $pluginSlug); ?>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 119**: abbreviations - Invalid abbreviation casing
  `<th class="column-url"><?php esc_html_e('URL', $pluginSlug); ?></th>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

