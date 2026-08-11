# Subtask 558: Fix violations in wp-plugins/riseup-asia-uploader/includes/Agent/Traits/AgentCrudWriteTrait.php

Target File: `wp-plugins/riseup-asia-uploader/includes/Agent/Traits/AgentCrudWriteTrait.php`

## Violations

- **Line 24**: abbreviations - Invalid abbreviation casing
  `// Literal 'Pending' required in SQL heredoc; matches agent status domain value`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 25**: abbreviations - Invalid abbreviation casing
  `private const AGENT_INSERT_QUERY = <<<'SQL'`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 28**: abbreviations - Invalid abbreviation casing
  `SQL;`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 142**: abbreviations - Invalid abbreviation casing
  `return new WP_Error(WpErrorCodeType::MissingFields->value, 'Name, URL, username, and application password are required');`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

