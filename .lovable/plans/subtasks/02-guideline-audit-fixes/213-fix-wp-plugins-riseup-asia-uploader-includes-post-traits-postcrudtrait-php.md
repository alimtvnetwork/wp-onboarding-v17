# Subtask 213: Fix violations in wp-plugins/riseup-asia-uploader/includes/Post/Traits/PostCrudTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Post/Traits/PostCrudTrait.php`

## Violations

- **Line 140**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$hasCategories = !empty($categories) && gettype($categories) === PhpNativeType::PhpArray->value;`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 107**: abbreviations - Invalid abbreviation casing
  `if ($currentUser && $currentUser->ID > 0) {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 108**: abbreviations - Invalid abbreviation casing
  `$postData['post_author'] = $currentUser->ID;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 115**: abbreviations - Invalid abbreviation casing
  `$postData = ['ID' => $postId];`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 148**: abbreviations - Invalid abbreviation casing
  `'id' => $post->ID, 'title' => $post->post_title,`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 150**: abbreviations - Invalid abbreviation casing
  `'permalink' => get_permalink($post->ID),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

