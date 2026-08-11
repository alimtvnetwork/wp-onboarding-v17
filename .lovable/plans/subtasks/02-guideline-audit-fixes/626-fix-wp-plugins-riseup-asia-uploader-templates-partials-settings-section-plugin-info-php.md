# Subtask 626: Fix violations in wp-plugins/riseup-asia-uploader/templates/partials/settings/section-plugin-info.php

Target File: `wp-plugins/riseup-asia-uploader/templates/partials/settings/section-plugin-info.php`

## Violations

- **Line 26**: abbreviations - Invalid abbreviation casing
  `<th><?php esc_html_e('API Namespace', $pluginSlug); ?></th>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 30**: abbreviations - Invalid abbreviation casing
  `<th><?php esc_html_e('REST API Base', $pluginSlug); ?></th>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

