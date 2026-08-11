package wordpress

import (
	"encoding/json"
	"fmt"

	ep "wp-plugin-publish/internal/enums/endpointtype"
	httpmethod "wp-plugin-publish/internal/enums/httpmethodtype"
	operationtype "wp-plugin-publish/internal/enums/operationtype"
	"wp-plugin-publish/pkg/apperror"
)

// StatusMetadata is the normalized metadata extracted from a plugin /status endpoint.
type StatusMetadata struct {
	Version       string
	WpVersion     string
	PhpVersion    string
	PluginName    string
	ApiNamespace  string
	ServerTime    string
	DbAvailable   string
	RemoteSiteUrl string
	Message       string
}

// GetStatusMetadataByNamespace fetches and normalizes the status payload for a specific namespace.
func (c *Client) GetStatusMetadataByNamespace(namespace string) apperror.Result[*StatusMetadata] {
	endpoint := BuildNamespacedEndpoint(namespace, ep.Status)

	rawResult := c.doApiCallRaw(ApiCallInput{
		Method:    httpmethod.Get,
		Endpoint:  endpoint,
		Operation: operationtype.GetUploaderStatus,
		ErrorCode: apperror.ErrWPConnection,
	})
	if rawResult.HasError() {
		return apperror.Fail[*StatusMetadata](rawResult.AppError())
	}

	metadata, err := parseStatusMetadata(rawResult.Value())
	if err != nil {
		return apperror.FailWrap[*StatusMetadata](err, apperror.ErrInternal, "decode plugin status metadata")
	}

	if metadata.ApiNamespace == "" {
		metadata.ApiNamespace = namespace
	}

	return apperror.Ok(metadata)
}

func parseStatusMetadata(data []byte) (*StatusMetadata, error) {
	var body map[string]json.RawMessage
	if err := json.Unmarshal(data, &body); err != nil {
		return nil, err
	}

	payload := getStatusPayload(body)
	metadata := &StatusMetadata{
		Version:       getStatusString(payload, "Version", "version"),
		WpVersion:     getStatusString(payload, "Wp", "WpVersion", "wp", "wpVersion", "wordpress_version"),
		PhpVersion:    getStatusString(payload, "Php", "PhpVersion", "php", "phpVersion", "php_version"),
		PluginName:    getStatusString(payload, "Plugin", "plugin"),
		ApiNamespace:  getStatusString(payload, "Api", "ApiNamespace", "api"),
		ServerTime:    getStatusString(payload, "ServerTime", "serverTime", "Timestamp", "timestamp"),
		DbAvailable:   getStatusString(payload, "DbAvailable", "dbAvailable"),
		RemoteSiteUrl: getStatusString(payload, "SiteUrl", "siteUrl"),
		Message:       getStatusString(payload, "Message", "message"),
	}

	if metadata.Version == "" {
		metadata.Version = getStatusString(body, "Version", "version")
	}

	return metadata, nil
}

func getStatusPayload(body map[string]json.RawMessage) map[string]json.RawMessage {
	if resultsRaw, exists := body["Results"]; exists {
		var results []map[string]json.RawMessage
		if err := json.Unmarshal(resultsRaw, &results); err == nil && len(results) > 0 {
			return results[0]
		}
	}

	if resultRaw, exists := body["Result"]; exists {
		var result map[string]json.RawMessage
		if err := json.Unmarshal(resultRaw, &result); err == nil {
			return result
		}
	}

	return body
}

func getStatusString(mapped map[string]json.RawMessage, keys ...string) string {
	if mapped == nil {
		return ""
	}

	for _, key := range keys {
		if raw, exists := mapped[key]; exists {
			formatted := formatStatusValue(raw)
			if formatted != "" {
				return formatted
			}
		}
	}

	return ""
}

func formatStatusValue(raw json.RawMessage) string {
	if len(raw) == 0 || string(raw) == "null" {
		return ""
	}

	var str string
	if err := json.Unmarshal(raw, &str); err == nil {
		return str
	}

	var b bool
	if err := json.Unmarshal(raw, &b); err == nil {
		if b {
			return "True"
		}
		return "False"
	}

	var num float64
	if err := json.Unmarshal(raw, &num); err == nil {
		return fmt.Sprint(num)
	}

	return string(raw)
}
