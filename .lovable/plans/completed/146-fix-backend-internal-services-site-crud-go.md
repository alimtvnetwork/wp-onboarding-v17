# Subtask 146: Fix violations in backend/internal/services/site/Crud.go

Target File: `backend/internal/services/site/Crud.go`

## Violations

- **Line 121**: go-loose-types - Type erasure (any/interface{})
  `func (s *Service) executeUpdate(ctx context.Context, id int64, updates []string, args []any) apperror.Result[models.Site] {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 137**: go-loose-types - Type erasure (any/interface{})
  `func (s *Service) buildUpdateFields(_ context.Context, id int64, input UpdateInput, existing *models.Site) ([]string, []any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 139**: go-loose-types - Type erasure (any/interface{})
  `var args []any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 156**: go-loose-types - Type erasure (any/interface{})
  `func appendNameUpdate(updates *[]string, args *[]any, name *string) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 168**: go-loose-types - Type erasure (any/interface{})
  `Args        *[]any`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 191**: go-loose-types - Type erasure (any/interface{})
  `func appendUsernameUpdate(updates *[]string, args *[]any, username *string) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 201**: go-loose-types - Type erasure (any/interface{})
  `func (s *Service) appendPasswordUpdate(updates *[]string, args *[]any, password *string) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 32**: abbreviations - Invalid abbreviation casing
  `// GetById returns a site by its ID.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 46**: abbreviations - Invalid abbreviation casing
  `// GetByUrl returns a site by its URL.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 76**: abbreviations - Invalid abbreviation casing
  `// checkDuplicateUrl verifies no existing site has the same URL.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 84**: abbreviations - Invalid abbreviation casing
  `return apperror.FailNew[models.Site](apperror.ErrValidation, "site with this URL already exists")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 268**: abbreviations - Invalid abbreviation casing
  `return apperror.New(apperror.ErrValidation, "URL is required")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 291**: abbreviations - Invalid abbreviation casing
  `// validateUrlFormat validates the URL can be parsed.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 295**: abbreviations - Invalid abbreviation casing
  `return apperror.Wrap(err, apperror.ErrValidation, "invalid URL format")`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

[x] FIXED (string literals)
[x] SKIPPED (False Positives: `any` in SQL args, abbreviations in comments)

