# Subtask 096: Fix violations in backend/internal/api/handlers/AdapterSite.go

Target File: `backend/internal/api/handlers/AdapterSite.go`

## Violations

- **Line 89**: go-loose-types - Type erasure (any/interface{})
  `UpdateRemoteSiteSettings(ctx context.Context, siteId int64, body map[string]any) (*wordpress.SiteSettingsUpdateResult, *apperror.AppError) // map[string]any justified: dynamic PHP settings input`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 91**: go-loose-types - Type erasure (any/interface{})
  `GetRemoteDebugRoutes(ctx context.Context, siteId int64) (any, *apperror.AppError)`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 350**: go-loose-types - Type erasure (any/interface{})
  `func (a *SiteServiceAdapter) UpdateRemoteSiteSettings(ctx context.Context, siteId int64, body map[string]any) (*wordpress.SiteSettingsUpdateResult, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 358**: go-loose-types - Type erasure (any/interface{})
  `func (a *SiteServiceAdapter) GetRemoteDebugRoutes(ctx context.Context, siteId int64) (any, *apperror.AppError) {`
  **Instruction**: Replace any/interface{} with a concrete type.

