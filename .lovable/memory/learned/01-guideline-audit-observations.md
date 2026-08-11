# Guideline Audit Observations

Found 5736 total violations across the codebase.

## no-negatives (200 violations)
- `backend/internal/services/publish/ServicePublishCloudUpload.go:16` - hasNoAccounts := len(accountIds) == 0
- `backend/internal/services/publish/ServicePublishCloudUpload.go:18` - if hasNoAccounts {
- `licensing/internal/manifest/validator.go:147` - hasNoChunks := len(m.Chunks) == 0
- `licensing/internal/manifest/validator.go:149` - if hasNoChunks {
- `licensing/internal/manifest/validator.go:181` - isNotLast := i < lastIndex
- ...and 195 more.

## go-fmt-errorf (48 violations)
- `backend/internal/enums/actiontype/Variant.go:142` - return Invalid, fmt.Errorf("invalid action: %q", s)
- `backend/internal/enums/backuptype/Variant.go:74` - return Invalid, fmt.Errorf("invalid backup type: %q", s)
- `backend/internal/enums/changetype/Variant.go:71` - return Invalid, fmt.Errorf("invalid change type: %q", s)
- `backend/internal/enums/connectionstatustype/Variant.go:81` - return Invalid, fmt.Errorf("invalid connection status: %q", s)
- `backend/internal/enums/connectionsteptype/Variant.go:117` - return Invalid, fmt.Errorf("invalid connection step: %q", s)
- ...and 43 more.

## go-loose-types (304 violations)
- `backend/cmd/server/MainInit.go:83` - Broadcast:        func(event string, data any) { ws.Broadcast(input.WSHub, event, data) },
- `backend/internal/api/handlers/AdapterSite.go:89` - UpdateRemoteSiteSettings(ctx context.Context, siteId int64, body map[string]any) (*wordpress.SiteSettingsUpdateResult, *apperror.AppError) // map[string]any justified: dynamic PHP settings input
- `backend/internal/api/handlers/AdapterSite.go:91` - GetRemoteDebugRoutes(ctx context.Context, siteId int64) (any, *apperror.AppError)
- `backend/internal/api/handlers/AdapterSite.go:350` - func (a *SiteServiceAdapter) UpdateRemoteSiteSettings(ctx context.Context, siteId int64, body map[string]any) (*wordpress.SiteSettingsUpdateResult, *apperror.AppError) {
- `backend/internal/api/handlers/AdapterSite.go:358` - func (a *SiteServiceAdapter) GetRemoteDebugRoutes(ctx context.Context, siteId int64) (any, *apperror.AppError) {
- ...and 299 more.

## php-enum-strict-compare (135 violations)
- `wp-plugins/qupload/includes/Admin/Traits/AdminMenuTrait.php:103` - if ($currentPage === AdminPageType::Errors->value) {
- `wp-plugins/qupload/includes/Helpers/PathHelper.php:82` - if (gettype($uploadDir) === PhpNativeType::PhpArray->value && isset($uploadDir['basedir']) && gettype($uploadDir['basedir']) === PhpNativeType::PhpString->value) {
- `wp-plugins/qupload/includes/Logging/FileLogger.php:428` - $hasEntries = gettype($entries) === PhpNativeType::PhpArray->value;
- `wp-plugins/qupload/includes/Logging/FileLogger.php:574` - $hasLogging = isset($settings['logging']) && gettype($settings['logging']) === PhpNativeType::PhpArray->value;
- `wp-plugins/qupload/includes/Logging/FileLogger.php:681` - $hasHashes = isset($data['hashes']) && gettype($data['hashes']) === PhpNativeType::PhpArray->value;
- ...and 130 more.

## php-raw-throwable (31 violations)
- `wp-plugins/qupload/includes/Admin/Traits/AdminErrorAjaxTrait.php:124` - } catch (\Throwable $e) {
- `wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminErrorAjaxTrait.php:241` - } catch (\Throwable $e) {
- `wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminErrorAjaxTrait.php:261` - } catch (\Throwable $e) {
- `wp-plugins/riseup-asia-uploader/includes/Admin/Traits/AdminErrorAjaxTrait.php:273` - } catch (\Throwable $e) {
- `wp-plugins/riseup-asia-uploader/includes/Traits/Log/LogClearAllTrait.php:82` - } catch (\Throwable $e) {
- ...and 26 more.

## abbreviations (5018 violations)
- `.gitmap/backup/wp-onboarding-v17/v17/fix-repo/20260811T001747Z/files/src/components/settings/AboutPanel.tsx:118` - Copy API URLs and version info for support
- `backend/cmd/server/MainInit.go:157` - // printStartupBanner prints the server URL info.
- `backend/internal/api/Router.go:1` - // Package api provides HTTP API routing and handlers
- `backend/internal/api/Router.go:150` - requestedPath := filepath.Clean(r.URL.Path)
- `backend/internal/api/RouterRoutes.go:28` - // registerRoutes registers all API v1 routes on the subrouter.
- ...and 5013 more.

