# Subtask 585: Fix violations in wp-plugins/riseup-asia-uploader/includes/Post/Traits/PostQueryTrait.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/Post/Traits/PostQueryTrait.php`

## Violations

- **Line 55**: abbreviations - Invalid abbreviation casing
  `'id'         => $post->ID,`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 59**: abbreviations - Invalid abbreviation casing
  `'permalink'  => get_permalink($post->ID),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

