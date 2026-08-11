# Subtask 091: Fix violations in licensing/internal/database/Database.go

Target File: `licensing/internal/database/Database.go`

## Violations

- **Line 20**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return nil, fmt.Errorf("create database directory: %w", mkErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 25**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return nil, fmt.Errorf("open database: %w", openErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 31**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return nil, fmt.Errorf("configure pragmas: %w", pragmaErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

- **Line 49**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return fmt.Errorf("exec %q: %w", pragma, execErr)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().

