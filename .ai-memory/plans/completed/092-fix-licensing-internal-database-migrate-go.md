# Subtask 092: Fix violations in licensing/internal/database/Migrate.go

Target File: `licensing/internal/database/Migrate.go`

## Violations

- **Line 19**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return fmt.Errorf("ensure migrations table: %w", initErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 24**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return fmt.Errorf("get applied migrations: %w", appliedErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 29**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return fmt.Errorf("list migration files: %w", readErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 40**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return fmt.Errorf("apply migration %s: %w", file, applyErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 109**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return fmt.Errorf("read file: %w", readErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 114**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return fmt.Errorf("begin transaction: %w", txErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 120**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return fmt.Errorf("exec SQL: %w", execErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 126**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return fmt.Errorf("record migration: %w", recordErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 14**: abbreviations - Invalid abbreviation casing
  `// Migrate runs all pending SQL migrations in order.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 120**: abbreviations - Invalid abbreviation casing
  `return fmt.Errorf("exec SQL: %w", execErr)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] FIXED
