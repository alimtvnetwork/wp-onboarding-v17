# Subtask 149: Fix violations in backend/internal/services/site/ServiceBootstrapZip.go

Target File: `backend/internal/services/site/ServiceBootstrapZip.go`

## Violations

- **Line 156**: go-loose-types - Type erasure (any/interface{})
  `// hasHiddenSegment checks if any path segment starts with a dot (except .uploadignore).`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 168**: go-loose-types - Type erasure (any/interface{})
  `// matchesSkipPattern checks if a path matches any skip pattern.`
  **Instruction**: Replace any/interface{} with a concrete type.


[x] SKIPPED (False Positive)
