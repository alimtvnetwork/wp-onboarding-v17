# Subtask 629: Fix violations in wp-plugins/riseup-asia-uploader/templates/partials/shared/pagination.php

Target File: `wp-plugins/riseup-asia-uploader/templates/partials/shared/pagination.php`

## Violations

- **Line 12**: abbreviations - Invalid abbreviation casing
  `*   $paginationBase — Custom base URL pattern (default: add_query_arg('paged', '%#%'))`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

