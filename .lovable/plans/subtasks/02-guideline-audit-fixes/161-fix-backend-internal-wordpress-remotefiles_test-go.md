# Subtask 161: Fix violations in backend/internal/wordpress/RemoteFiles_test.go

Target File: `backend/internal/wordpress/RemoteFiles_test.go`

## Violations

- **Line 68**: go-loose-types - Type erasure (any/interface{})
  `_ = json.NewEncoder(w).Encode(map[string]any{`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 98**: go-loose-types - Type erasure (any/interface{})
  `_ = json.NewEncoder(w).Encode(map[string]any{`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 164**: go-loose-types - Type erasure (any/interface{})
  `var body map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 211**: go-loose-types - Type erasure (any/interface{})
  `_ = json.NewEncoder(w).Encode(map[string]any{`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 246**: go-loose-types - Type erasure (any/interface{})
  `var body map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 280**: go-loose-types - Type erasure (any/interface{})
  `var body map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 313**: go-loose-types - Type erasure (any/interface{})
  `var body map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 19**: abbreviations - Invalid abbreviation casing
  `if r.URL.Path != "/wp-json/onboard-plugin/v1/plugins/list" {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 20**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected path: %s", r.URL.Path)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 28**: abbreviations - Invalid abbreviation casing
  `c := NewClient(ClientConfig{BaseUrl: server.URL, Username: "u", Password: "p", Timeout: 2 * time.Second})`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 41**: abbreviations - Invalid abbreviation casing
  `if r.URL.Path != "/wp-json/plugin-uploader/v1/status" {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 42**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected path: %s, expected /wp-json/plugin-uploader/v1/status", r.URL.Path)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 50**: abbreviations - Invalid abbreviation casing
  `c := NewClient(ClientConfig{BaseUrl: server.URL, Username: "u", Password: "p", Timeout: 2 * time.Second})`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 62**: abbreviations - Invalid abbreviation casing
  `if r.URL.Path != "/wp-json/onboard-plugin/v1/request-mutation" {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 63**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected path: %s", r.URL.Path)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 65**: abbreviations - Invalid abbreviation casing
  `if r.URL.Query().Get("action") != "upload" {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 66**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected action: %s", r.URL.Query().Get("action"))`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 75**: abbreviations - Invalid abbreviation casing
  `c := NewClient(ClientConfig{BaseUrl: server.URL, Username: "u", Password: "p", Timeout: 2 * time.Second})`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 93**: abbreviations - Invalid abbreviation casing
  `switch r.URL.Path {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 95**: abbreviations - Invalid abbreviation casing
  `if r.URL.Query().Get("action") != "upload" {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 96**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected action: %s", r.URL.Query().Get("action"))`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 130**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected path: %s", r.URL.Path)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 135**: abbreviations - Invalid abbreviation casing
  `c := NewClient(ClientConfig{BaseUrl: server.URL, Username: "u", Password: "p", Timeout: 2 * time.Second})`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 154**: abbreviations - Invalid abbreviation casing
  `if r.URL.Path != "/wp-json/plugin-uploader/v1/upload" {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 155**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected path: %s, expected /wp-json/plugin-uploader/v1/upload", r.URL.Path)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 190**: abbreviations - Invalid abbreviation casing
  `c := NewClient(ClientConfig{BaseUrl: server.URL, Username: "u", Password: "p", Timeout: 2 * time.Second})`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 206**: abbreviations - Invalid abbreviation casing
  `switch r.URL.Path {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 208**: abbreviations - Invalid abbreviation casing
  `if r.URL.Query().Get("action") != "enable" {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 209**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected action: %s", r.URL.Query().Get("action"))`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 224**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected path: %s", r.URL.Path)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 229**: abbreviations - Invalid abbreviation casing
  `c := NewClient(ClientConfig{BaseUrl: server.URL, Username: "u", Password: "p", Timeout: 2 * time.Second})`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 238**: abbreviations - Invalid abbreviation casing
  `// Fixed URL endpoint - slug is in JSON body, not in URL path`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 239**: abbreviations - Invalid abbreviation casing
  `if r.URL.Path != "/wp-json/plugin-uploader/v1/plugins/enable" {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 240**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected path: %s (expected /wp-json/plugin-uploader/v1/plugins/enable)", r.URL.Path)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 263**: abbreviations - Invalid abbreviation casing
  `c := NewClient(ClientConfig{BaseUrl: server.URL, Username: "u", Password: "p", Timeout: 2 * time.Second})`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 272**: abbreviations - Invalid abbreviation casing
  `// Fixed URL endpoint - slug is in JSON body, not in URL path`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 273**: abbreviations - Invalid abbreviation casing
  `if r.URL.Path != "/wp-json/plugin-uploader/v1/plugins/disable" {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 274**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected path: %s (expected /wp-json/plugin-uploader/v1/plugins/disable)", r.URL.Path)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 297**: abbreviations - Invalid abbreviation casing
  `c := NewClient(ClientConfig{BaseUrl: server.URL, Username: "u", Password: "p", Timeout: 2 * time.Second})`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 306**: abbreviations - Invalid abbreviation casing
  `if r.URL.Path != "/wp-json/plugin-uploader/v1/plugins/exists" {`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 307**: abbreviations - Invalid abbreviation casing
  `t.Fatalf("unexpected path: %s", r.URL.Path)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 330**: abbreviations - Invalid abbreviation casing
  `c := NewClient(ClientConfig{BaseUrl: server.URL, Username: "u", Password: "p", Timeout: 2 * time.Second})`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

