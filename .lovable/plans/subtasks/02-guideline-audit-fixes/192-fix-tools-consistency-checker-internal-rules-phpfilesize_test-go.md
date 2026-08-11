# Subtask 192: Fix violations in tools/consistency-checker/internal/rules/PhpFileSize_test.go

Target File: `tools/consistency-checker/internal/rules/PhpFileSize_test.go`

## Violations

- **Line 63**: go-loose-types - Type erasure (any/interface{})
  `Params:    map[string]any{"max_lines": float64(maxLines)},`
  **Instruction**: Replace any/interface{} with a concrete type.

