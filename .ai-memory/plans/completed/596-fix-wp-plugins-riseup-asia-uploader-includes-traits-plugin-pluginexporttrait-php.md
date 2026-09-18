# Subtask 596: Fix violations in wp-plugins/riseup-asia-uploader/includes/Traits/Plugin/PluginExportTrait.php

Status: completed

Target File: `wp-plugins/riseup-asia-uploader/includes/Traits/Plugin/PluginExportTrait.php`

## Violations

- **Line 59**: abbreviations - Invalid abbreviation casing
  `return $this->errorResponse('Plugin slug is required in JSON body', HttpStatusType::BadRequest->value);`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

