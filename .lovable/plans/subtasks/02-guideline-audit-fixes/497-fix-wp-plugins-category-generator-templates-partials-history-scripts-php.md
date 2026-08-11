# Subtask 497: Fix violations in wp-plugins/category-generator/templates/partials/history-scripts.php

Target File: `wp-plugins/category-generator/templates/partials/history-scripts.php`

## Violations

- **Line 420**: abbreviations - Invalid abbreviation casing
  `const parsed = JSON.parse(raw);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 426**: abbreviations - Invalid abbreviation casing
  `try { localStorage.setItem(CG_COLUMNS_STORAGE_KEY, JSON.stringify(hidden)); } catch (e) {}`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

