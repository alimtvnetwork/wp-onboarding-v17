# Subtask 535: Fix violations in wp-plugins/ignored-plugins/plugins-onboard/includes/traits/PluginManagerUploadTrait.php

Target File: `wp-plugins/ignored-plugins/plugins-onboard/includes/traits/PluginManagerUploadTrait.php`

## Violations

- **Line 25**: abbreviations - Invalid abbreviation casing
  `* @param string|null $app_id     Application ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 26**: abbreviations - Invalid abbreviation casing
  `* @param string|null $ip_address IP address.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

