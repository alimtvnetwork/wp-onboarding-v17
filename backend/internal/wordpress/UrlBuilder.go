// Package wordpress — Url construction helpers.
// All WordPress Rest Api Url construction MUST go through these functions.
// Raw "/wp-json" or hardcoded path fragments are forbidden in business logic.
package wordpress

import (
	"fmt"

	ep "wp-plugin-publish/internal/enums/endpointtype"
)

// BuildWpJsonUrl constructs a full WordPress Json Api Url: {baseUrl}/wp-json{endpoint}.
// The endpoint should start with "/" (e.g., "/riseup-asia-uploader/v1/status").
func BuildWpJsonUrl(baseUrl, endpoint string) string {
	return fmt.Sprintf("%s%s%s", baseUrl, WPCoreApiRoot, endpoint)
}

// BuildWpPluginUrl constructs a full WordPress plugin Api Url: {baseUrl}/wp-json/{namespace}{endpointPath}.
func BuildWpPluginUrl(baseUrl, namespace string, endpoint ep.Variant) string {
	return fmt.Sprintf("%s%s/%s%s", baseUrl, WPCoreApiRoot, namespace, endpoint.String())
}

// BuildWpProbeUrl constructs the WordPress Rest Api probe Url: {baseUrl}/wp-json/.
func BuildWpProbeUrl(baseUrl string) string {
	return fmt.Sprintf("%s%s/", baseUrl, WPCoreApiRoot)
}

// BuildNamespacedEndpoint constructs a namespaced endpoint path: /{namespace}{endpointPath}.
func BuildNamespacedEndpoint(namespace string, endpoint ep.Variant) string {
	return fmt.Sprintf("/%s%s", namespace, endpoint.String())
}

// OnboardMutationUploadEndpoint constructs the legacy Onboard mutation upload endpoint.
// Pattern: /{namespace}/mutations/{token}/plugins/upload
func OnboardMutationUploadEndpoint(namespace, mutationToken string) string {
	return fmt.Sprintf("/%s%s%s%s",
		namespace,
		OnboardMutationPrefix,
		mutationToken,
		OnboardMutationUploadSuffix,
	)
}
