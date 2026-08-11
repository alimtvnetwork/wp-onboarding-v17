# Subtask 089: Fix violations in backend/internal/services/site/ServiceDeployPreflight.go

Target File: `backend/internal/services/site/ServiceDeployPreflight.go`

## Violations

- **Line 262**: go-fmt-errorf - fmt.Errorf used instead of apperror
  `return nil, fmt.Errorf("failed to decrypt credentials: %w", err)`
  **Instruction**: Replace fmt.Errorf with apperror.Wrap() or apperror.New().


[x] FIXED
