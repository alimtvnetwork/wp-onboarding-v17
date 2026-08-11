# Refactor Enums and Error Logging

**Status:** Pending
**Goal:** Replace string union types with Enums, enforce explicit `response.isFail` checks instead of inverted success booleans, and implement query error logging wrappers.

## Requirements

1. **Replace String Unions:** In TypeScript, replace all string union types (e.g. `"pass" | "fail" | "fallback"`) with Enums.
2. **Enum Naming:** All Enums must end with the suffix `Type` (e.g., `StatusType`).
3. **Boolean Checks:** Replace all instances of `!response.isSuccess` with explicit `response.isFail` checks.
4. **Query Wrapper:** Create a query wrapper for PHP/Python/TS that handles automatic failure logging, to avoid scattered logging code.
5. **Magic Values:** Remove all magic strings and numbers unless used specifically for the logger (and specify that in typing).
6. **Error Logging:** Ensure all `try-catch` blocks log errors according to `spec/08-error-manage` (error manage folder guidelines).

## Execution Strategy

- Spawn sub-agents to parallelize finding and replacing string unions in TS/TSX files.
- Audit `.php` files and implement the centralized query wrapper for database interaction, along with try-catch auditing.
- Find the root cause for existing unhandled scenarios and log them properly.
- Run tests and CI/CD pipelines to ensure everything builds and passes.
- Group commits locally, and finally push to the remote git repository.
- Run minor release bump script once verified.
