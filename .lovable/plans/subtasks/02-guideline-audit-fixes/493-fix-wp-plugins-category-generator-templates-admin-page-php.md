# Subtask 493: Fix violations in wp-plugins/category-generator/templates/admin-page.php

Target File: `wp-plugins/category-generator/templates/admin-page.php`

## Violations

- **Line 188**: abbreviations - Invalid abbreviation casing
  `<?php _e('Each FAQ variation generates both visible HTML and FAQPage Schema.org JSON-LD. One variation is randomly selected during generation.', 'category-generator'); ?>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 214**: abbreviations - Invalid abbreviation casing
  `<span><?php _e('Generate FAQPage Schema.org JSON-LD for FAQ content', 'category-generator'); ?></span>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 290**: abbreviations - Invalid abbreviation casing
  `<?php _e('Local Business Schema (JSON-LD)', 'category-generator'); ?>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 296**: abbreviations - Invalid abbreviation casing
  `<span><?php _e('Include Schema.org JSON-LD in category description (wrapped in div)', 'category-generator'); ?></span>`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

