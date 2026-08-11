# Subtask 180: Fix violations in licensing/internal/handlers/AdminHandlers_test.go

Target File: `licensing/internal/handlers/AdminHandlers_test.go`

## Violations

- **Line 12**: go-loose-types - Type erasure (any/interface{})
  `body := map[string]any{`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 23**: go-loose-types - Type erasure (any/interface{})
  `var result map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 38**: go-loose-types - Type erasure (any/interface{})
  `resp := adminRequest(t, "POST", srv.URL+"/api/v1/admin/licenses", map[string]any{`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 53**: go-loose-types - Type erasure (any/interface{})
  `var result []map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 64**: go-loose-types - Type erasure (any/interface{})
  `createResp := adminRequest(t, "POST", srv.URL+"/api/v1/admin/licenses", map[string]any{`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 69**: go-loose-types - Type erasure (any/interface{})
  `var created map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 77**: go-loose-types - Type erasure (any/interface{})
  `var result map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 88**: go-loose-types - Type erasure (any/interface{})
  `createResp := adminRequest(t, "POST", srv.URL+"/api/v1/admin/licenses", map[string]any{`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 93**: go-loose-types - Type erasure (any/interface{})
  `var created map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 99**: go-loose-types - Type erasure (any/interface{})
  `resp := adminRequest(t, "PATCH", srv.URL+"/api/v1/admin/licenses/"+intStr(id), map[string]any{`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 106**: go-loose-types - Type erasure (any/interface{})
  `var result map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 120**: go-loose-types - Type erasure (any/interface{})
  `createResp := adminRequest(t, "POST", srv.URL+"/api/v1/admin/licenses", map[string]any{`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 125**: go-loose-types - Type erasure (any/interface{})
  `var created map[string]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 20**: abbreviations - Invalid abbreviation casing
  `resp := adminRequest(t, "POST", srv.URL+"/api/v1/admin/licenses", body)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 38**: abbreviations - Invalid abbreviation casing
  `resp := adminRequest(t, "POST", srv.URL+"/api/v1/admin/licenses", map[string]any{`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 47**: abbreviations - Invalid abbreviation casing
  `createTestLicense(t, srv.URL, 1)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 48**: abbreviations - Invalid abbreviation casing
  `createTestLicense(t, srv.URL, 1)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 50**: abbreviations - Invalid abbreviation casing
  `resp := adminRequest(t, "GET", srv.URL+"/api/v1/admin/licenses", nil)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 64**: abbreviations - Invalid abbreviation casing
  `createResp := adminRequest(t, "POST", srv.URL+"/api/v1/admin/licenses", map[string]any{`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 74**: abbreviations - Invalid abbreviation casing
  `resp := adminRequest(t, "GET", srv.URL+"/api/v1/admin/licenses/"+intStr(id), nil)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 88**: abbreviations - Invalid abbreviation casing
  `createResp := adminRequest(t, "POST", srv.URL+"/api/v1/admin/licenses", map[string]any{`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 99**: abbreviations - Invalid abbreviation casing
  `resp := adminRequest(t, "PATCH", srv.URL+"/api/v1/admin/licenses/"+intStr(id), map[string]any{`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 120**: abbreviations - Invalid abbreviation casing
  `createResp := adminRequest(t, "POST", srv.URL+"/api/v1/admin/licenses", map[string]any{`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 130**: abbreviations - Invalid abbreviation casing
  `resp := adminRequest(t, "DELETE", srv.URL+"/api/v1/admin/licenses/"+intStr(id), nil)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 133**: abbreviations - Invalid abbreviation casing
  `getResp := adminRequest(t, "GET", srv.URL+"/api/v1/admin/licenses/"+intStr(id), nil)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 141**: abbreviations - Invalid abbreviation casing
  `req, _ := http.NewRequest("GET", srv.URL+"/api/v1/admin/licenses", nil)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 154**: abbreviations - Invalid abbreviation casing
  `req, _ := http.NewRequest("GET", srv.URL+"/api/v1/admin/licenses", nil)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

