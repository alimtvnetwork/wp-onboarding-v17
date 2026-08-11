# Subtask 021: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/CloudStorage/CloudStorageGitHubTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/CloudStorage/CloudStorageGitHubTrait.php`

## Violations

- **Line 229**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$isNotFound = ($statusCode === HttpStatusType::NotFound->value);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 231**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($isNotFound) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 280**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$hasNoFiles = empty($filePaths);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 282**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($hasNoFiles) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 344**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$isNotFound   = ($statusCode === HttpStatusType::NotFound->value);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 346**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($isNotFound) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 57**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$repoExists = ($statusCode === HttpStatusType::Ok->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 229**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isNotFound = ($statusCode === HttpStatusType::NotFound->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 344**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isNotFound   = ($statusCode === HttpStatusType::NotFound->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 449**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$fileExists = ($statusCode === HttpStatusType::Ok->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 3**: abbreviations - Invalid abbreviation casing
  `* CloudStorageGitHubTrait — GitHub API operations for cloud storage.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 5**: abbreviations - Invalid abbreviation casing
  `* Supports PAT authentication, Contents API (files ≤100 MB), and`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 6**: abbreviations - Invalid abbreviation casing
  `* Git Data API (blobs/trees/commits for files >100 MB).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 76**: abbreviations - Invalid abbreviation casing
  `/** Upload a file via the Contents API (≤100 MB). */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 117**: abbreviations - Invalid abbreviation casing
  `/** Upload a large file via the Git Data API (blob → tree → commit). */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 214**: abbreviations - Invalid abbreviation casing
  `* Fetch raw Contents API response for a directory.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 219**: abbreviations - Invalid abbreviation casing
  `* @return array Raw API response items.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 265**: abbreviations - Invalid abbreviation casing
  `* Uses the Git Data API (tree → commit → ref update) to remove all files`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 266**: abbreviations - Invalid abbreviation casing
  `* under the given path atomically, avoiding per-file API calls.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 393**: abbreviations - Invalid abbreviation casing
  `/** Make a GitHub API request and return decoded body. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 403**: abbreviations - Invalid abbreviation casing
  `throw new RuntimeException('GitHub API request failed: ' . $response->get_error_message());`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 414**: abbreviations - Invalid abbreviation casing
  `sprintf('GitHub API rate limited. Resets at %s', date('Y-m-d H:i:s', (int) $resetAt)),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 422**: abbreviations - Invalid abbreviation casing
  `sprintf('GitHub API error [%d]: %s', $statusCode, $decoded['message'] ?? 'Unknown error'),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 429**: abbreviations - Invalid abbreviation casing
  `/** Get the HTTP status code for a GitHub API request. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

