# Subtask 139: Fix violations in backend/internal/services/publish/ServiceZip.go

Target File: `backend/internal/services/publish/ServiceZip.go`

## Violations

- **Line 204**: go-loose-types - Type erasure (any/interface{})
  `// isExcludedByPatterns checks if a file matches any exclude pattern.`
  **Instruction**: Replace any/interface{} with a concrete type.

