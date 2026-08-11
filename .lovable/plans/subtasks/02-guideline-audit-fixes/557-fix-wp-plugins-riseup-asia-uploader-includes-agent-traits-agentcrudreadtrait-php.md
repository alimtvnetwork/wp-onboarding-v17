# Subtask 557: Fix violations in wp-plugins/riseup-asia-uploader/includes/Agent/Traits/AgentCrudReadTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Agent/Traits/AgentCrudReadTrait.php`

## Violations

- **Line 27**: abbreviations - Invalid abbreviation casing
  `private const AGENT_LIST_QUERY = <<<'SQL'`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 32**: abbreviations - Invalid abbreviation casing
  `SQL;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

