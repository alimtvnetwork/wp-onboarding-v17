# Subtask 022: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/CloudStorage/CloudStorageGitLabTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/CloudStorage/CloudStorageGitLabTrait.php`

## Violations

- **Line 199**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$isNotFound = ($statusCode === HttpStatusType::NotFound->value);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 201**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($isNotFound) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 253**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$hasNoFiles = empty($filePaths);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 255**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($hasNoFiles) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 306**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$isNotFound = ($statusCode === HttpStatusType::NotFound->value);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 308**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($isNotFound) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 431**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$isNotGroup = ($statusCode !== HttpStatusType::Ok->value);`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 433**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($isNotGroup) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 56**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$projectExists = ($statusCode === HttpStatusType::Ok->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 110**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$fileExists = ($existsStatus === HttpStatusType::Ok->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 199**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isNotFound = ($statusCode === HttpStatusType::NotFound->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 306**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `$isNotFound = ($statusCode === HttpStatusType::NotFound->value);`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 3**: abbreviations - Invalid abbreviation casing
  `* CloudStorageGitLabTrait — GitLab API operations for cloud storage.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 6**: abbreviations - Invalid abbreviation casing
  `* instances via BaseUrl, Repository Files API (create/update), and`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 7**: abbreviations - Invalid abbreviation casing
  `* Commits API for large file uploads.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 81**: abbreviations - Invalid abbreviation casing
  `/** Upload a file via the Repository Files API. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 188**: abbreviations - Invalid abbreviation casing
  `* @return array Raw API response items.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 237**: abbreviations - Invalid abbreviation casing
  `* Uses the GitLab Commits API with multiple `delete` actions to remove`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 259**: abbreviations - Invalid abbreviation casing
  `// 2. Build delete actions for the Commits API`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 285**: abbreviations - Invalid abbreviation casing
  `* Recursively list all file paths under a directory via the repository tree API.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 287**: abbreviations - Invalid abbreviation casing
  `* @param string $apiBase     API base URL.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 288**: abbreviations - Invalid abbreviation casing
  `* @param string $projectPath URL-encoded project path.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 328**: abbreviations - Invalid abbreviation casing
  `/** Derive the API base URL from account BaseUrl (supports self-hosted). */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 357**: abbreviations - Invalid abbreviation casing
  `/** Make a GitLab API request and return decoded body. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 367**: abbreviations - Invalid abbreviation casing
  `throw new RuntimeException('GitLab API request failed: ' . $response->get_error_message());`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 378**: abbreviations - Invalid abbreviation casing
  `sprintf('GitLab API error [%d]: %s', $statusCode, $errorMessage),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 385**: abbreviations - Invalid abbreviation casing
  `/** Make a GitLab API request and return the raw response body (for binary file downloads). */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 396**: abbreviations - Invalid abbreviation casing
  `throw new RuntimeException('GitLab raw API request failed: ' . $response->get_error_message());`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 404**: abbreviations - Invalid abbreviation casing
  `sprintf('GitLab raw API error [%d] for %s', $statusCode, $path),`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 411**: abbreviations - Invalid abbreviation casing
  `/** Get the HTTP status code for a GitLab API request. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 427**: abbreviations - Invalid abbreviation casing
  `/** Resolve a namespace (group) to its numeric ID. Returns 0 if not a group. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

