# Subtask 186: Fix violations in licensing/internal/services/Scanners.go

Target File: `licensing/internal/services/Scanners.go`

## Violations

- **Line 16**: go-loose-types - Type erasure (any/interface{})
  `Scan(dest ...any) error`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 22**: go-loose-types - Type erasure (any/interface{})
  `Scan(dest ...any) error`
  **Instruction**: Replace any/interface{} with a concrete type.

