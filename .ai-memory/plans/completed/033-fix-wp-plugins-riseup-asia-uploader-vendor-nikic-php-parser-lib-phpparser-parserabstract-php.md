# Subtask 033: Fix violations in wp-plugins/riseup-asia-uploader/vendor/nikic/php-parser/lib/PhpParser/ParserAbstract.php

Target File: `wp-plugins/riseup-asia-uploader/vendor/nikic/php-parser/lib/PhpParser/ParserAbstract.php`

## Violations

- **Line 97**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `*             non-terminal/state pair is $goto[$gotoBase[$nonTerminal] + $state] (unless defaulted) */`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 101**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `/** @var int[] Table indexed analogously to $goto. If $gotoCheck[$gotoBase[$nonTerminal] + $state] != $nonTerminal`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 102**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `*             then the goto state is defaulted, i.e. $gotoDefault[$nonTerminal] should be used. */`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 349**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$nonTerminal = $this->ruleToNonTerminal[$rule];`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 350**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$idx = $this->gotoBase[$nonTerminal] + $stateStack[$stackPos];`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 351**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `if ($idx >= 0 && $idx < $this->gotoTableSize && $this->gotoCheck[$idx] === $nonTerminal) {`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 354**: no-negatives - Negative boolean pattern found (isNot, hasNo, non)
  `$state = $this->gotoDefault[$nonTerminal];`
  **Instruction**: Refactor the boolean variable/function to use a positive semantic name (e.g. isPending instead of isNotReady) and reverse the logic if necessary.

- **Line 1323**: abbreviations - Invalid abbreviation casing
  `// Now map them to the internal symbol ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).


[x] SKIPPED (False Positive) - Vendor code and standard parsing terminology (non-terminal)
