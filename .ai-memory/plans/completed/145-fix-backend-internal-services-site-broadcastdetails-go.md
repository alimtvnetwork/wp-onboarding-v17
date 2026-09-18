# Subtask 145: Fix violations in backend/internal/services/site/BroadcastDetails.go

Target File: `backend/internal/services/site/BroadcastDetails.go`

## Violations

- **Line 2**: go-loose-types - Type erasure (any/interface{})
  `// These replace inline map[string]any literals at call sites, ensuring`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 10**: go-loose-types - Type erasure (any/interface{})
  `// directly to json.RawMessage without an intermediate map[string]any.`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 11**: go-loose-types - Type erasure (any/interface{})
  `func toJson(v any) json.RawMessage {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 184**: go-loose-types - Type erasure (any/interface{})
  `// This replaces the legacy map[string]any return from extractErrorDetails.`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 210**: go-loose-types - Type erasure (any/interface{})
  `// --- Typed structs for error response parsing (replaces map[string]any in extractErrorDetails) ---`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 247**: go-loose-types - Type erasure (any/interface{})
  `// for name resolution in logRemoteAction. Replaces map[string]any parsing.`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 38**: abbreviations - Invalid abbreviation casing
  `// UrlNormalizeDetails carries URL normalization context.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 53**: abbreviations - Invalid abbreviation casing
  `// SiteIdDetail carries a minimal site ID reference.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 183**: abbreviations - Invalid abbreviation casing
  `// ExtractedErrorDetails carries structured error context extracted from WordPress API errors.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 212**: abbreviations - Invalid abbreviation casing
  `// errorResponseEnvelope is the typed structure for parsing WordPress API error responses.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 246**: abbreviations - Invalid abbreviation casing
  `// remoteActionLogContext holds typed fields extracted from log details JSON`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] FIXED (Line 11)
[x] SKIPPED (False Positives: all other lines are in comments)
