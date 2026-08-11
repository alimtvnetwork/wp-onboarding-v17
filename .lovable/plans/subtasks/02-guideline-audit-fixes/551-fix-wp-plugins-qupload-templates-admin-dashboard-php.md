# Subtask 551: Fix violations in wp-plugins/qupload/templates/admin-dashboard.php

Target File: `wp-plugins/qupload/templates/admin-dashboard.php`

## Violations

- **Line 75**: abbreviations - Invalid abbreviation casing
  `<!-- REST API Endpoints -->`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 77**: abbreviations - Invalid abbreviation casing
  `<h2><span class="dashicons dashicons-rest-api"></span> <?php esc_html_e('REST API Endpoints', $pluginSlug); ?></h2>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 78**: abbreviations - Invalid abbreviation casing
  `<p><?php esc_html_e('Base URL:', $pluginSlug); ?> <code><?php echo esc_url($restUrl); ?></code></p>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

