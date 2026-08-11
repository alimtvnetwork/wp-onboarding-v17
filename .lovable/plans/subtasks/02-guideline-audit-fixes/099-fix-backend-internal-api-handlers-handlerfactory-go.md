# Subtask 099: Fix violations in backend/internal/api/handlers/HandlerFactory.go

Target File: `backend/internal/api/handlers/HandlerFactory.go`

## Violations

- **Line 6**: go-loose-types - Type erasure (any/interface{})
  `// Factory functions are generic [T any] — the type parameter T is inferred from the`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 7**: go-loose-types - Type erasure (any/interface{})
  `// callback return type. This eliminates any from all callback signatures while keeping`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 31**: go-loose-types - Type erasure (any/interface{})
  `func handleActionById[T any](`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 93**: go-loose-types - Type erasure (any/interface{})
  `func handleListNilSafe[T any](`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 122**: go-loose-types - Type erasure (any/interface{})
  `func handleSiteActionById[T any](`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 161**: go-loose-types - Type erasure (any/interface{})
  `func handleSiteActionByIdWithQuery[T any](`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 209**: go-loose-types - Type erasure (any/interface{})
  `func handleNoArgs[T any](`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 244**: go-loose-types - Type erasure (any/interface{})
  `func handleTwoIds[T any](`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 22**: abbreviations - Invalid abbreviation casing
  `// handlerIdConfig bundles parameters for single-ID handler factories.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 182**: abbreviations - Invalid abbreviation casing
  `query := r.URL.RawQuery`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 234**: abbreviations - Invalid abbreviation casing
  `// twoIdConfig bundles parameters for two-ID handler factories.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

