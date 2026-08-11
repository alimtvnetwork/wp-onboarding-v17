# Subtask 251: Fix violations in wp-plugins/riseup-asia-uploader/templates/admin-errors.php

Target File: `wp-plugins/riseup-asia-uploader/templates/admin-errors.php`

## Violations

- **Line 71**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `class="nav-tab <?php echo $activeTab === AdminTabType::Sessions->value ? 'nav-tab-active' : ''; ?>">`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 79**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `class="nav-tab <?php echo $activeTab === AdminTabType::Log->value ? 'nav-tab-active' : ''; ?>">`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 84**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `class="nav-tab <?php echo $activeTab === AdminTabType::Error->value ? 'nav-tab-active' : ''; ?>">`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 89**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `class="nav-tab <?php echo $activeTab === AdminTabType::Stacktrace->value ? 'nav-tab-active' : ''; ?>">`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 98**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `<?php if ($activeTab === AdminTabType::Sessions->value): ?>`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

