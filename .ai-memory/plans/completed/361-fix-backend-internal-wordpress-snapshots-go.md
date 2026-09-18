# Subtask 361: Fix violations in backend/internal/wordpress/Snapshots.go

Target File: `backend/internal/wordpress/Snapshots.go`

## Violations

- **Line 1**: abbreviations - Invalid abbreviation casing
  `// Package wordpress provides snapshot management via the Riseup Asia Uploader REST API.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 2**: abbreviations - Invalid abbreviation casing
  `// All endpoints use fixed paths with IDs passed in JSON request bodies.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 17**: abbreviations - Invalid abbreviation casing
  `Id        int64  `json:"id"`        // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 32**: abbreviations - Invalid abbreviation casing
  `Provider      string `json:"provider"`            // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 46**: abbreviations - Invalid abbreviation casing
  `Id int64 `json:"id"` // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 51**: abbreviations - Invalid abbreviation casing
  `Scope  string   `json:"scope,omitempty"`  // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 58**: abbreviations - Invalid abbreviation casing
  `Success    bool   `json:"success"`              // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 66**: abbreviations - Invalid abbreviation casing
  `Id      int64 `json:"id"`      // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 72**: abbreviations - Invalid abbreviation casing
  `Success bool   `json:"success"`           // external key (Riseup Asia snapshot API)`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 134**: abbreviations - Invalid abbreviation casing
  `// GetSnapshot returns details for a specific snapshot (ID in JSON body).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 155**: abbreviations - Invalid abbreviation casing
  `// DeleteSnapshot removes a snapshot from the remote site (ID in JSON body).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 168**: abbreviations - Invalid abbreviation casing
  `// RestoreSnapshot triggers a restore from a snapshot on the remote site (ID in JSON body).`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

