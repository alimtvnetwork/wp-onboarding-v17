# Subtask 200: Fix violations in wp-plugins/qupload/templates/admin-errors.php

Target File: `wp-plugins/qupload/templates/admin-errors.php`

## Violations

- **Line 36**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `class="nav-tab <?php echo $activeTab === AdminTabType::Log->value ? 'nav-tab-active' : ''; ?>">`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 41**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `class="nav-tab <?php echo $activeTab === AdminTabType::Error->value ? 'nav-tab-active' : ''; ?>">`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

- **Line 46**: php-enum-strict-compare - Strict comparison (===) used for Enum
  `class="nav-tab <?php echo $activeTab === AdminTabType::Stacktrace->value ? 'nav-tab-active' : ''; ?>">`
  **Instruction**: Replace === StatusType::Foo with $var->isEqual(StatusType::Foo).

