# Subtask 623: Fix violations in wp-plugins/riseup-asia-uploader/templates/partials/settings/section-auto-update.php

Target File: `wp-plugins/riseup-asia-uploader/templates/partials/settings/section-auto-update.php`

## Violations

- **Line 26**: abbreviations - Invalid abbreviation casing
  `<?php esc_html_e('Configure automatic updates with 301 redirect URL resolution. The master URL will be resolved through redirects and cached for faster subsequent checks.', $pluginSlug); ?>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 43**: abbreviations - Invalid abbreviation casing
  `<p class="description"><?php esc_html_e('Enable automatic update checking via the configured master URL.', $pluginSlug); ?></p>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 48**: abbreviations - Invalid abbreviation casing
  `<label for="master_url"><?php esc_html_e('Master Update URL', $pluginSlug); ?></label>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 57**: abbreviations - Invalid abbreviation casing
  `<p class="description"><?php esc_html_e('The URL that will be resolved through 301 redirects to find the actual update endpoint.', $pluginSlug); ?></p>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 71**: abbreviations - Invalid abbreviation casing
  `<p class="description"><?php esc_html_e('How long to cache the resolved URL before re-resolving through redirects.', $pluginSlug); ?></p>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 75**: abbreviations - Invalid abbreviation casing
  `<th scope="row"><?php esc_html_e('Resolved URL (Cached)', $pluginSlug); ?></th>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

