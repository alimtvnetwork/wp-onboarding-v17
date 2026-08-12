# Subtask 580: Fix violations in wp-plugins/riseup-asia-uploader/includes/Licensing/HmacSigner.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/Licensing/HmacSigner.php`

## Violations

- **Line 3**: abbreviations - Invalid abbreviation casing
  `* HmacSigner — HMAC-SHA256 request signing for licensing API authentication.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 30**: abbreviations - Invalid abbreviation casing
  `* @param string $body    The JSON request body (empty string for GET requests).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

