# Learned: Project Context, Guidelines & Institutional Memory

> **Updated:** 2026-09-17
> **Summary:** Canonical learned memory of repository identity, CODE RED rules, naming conventions, error philosophy, and active plans ingested from .ai-memory/ and spec/ directories.

## 1. Repository Identity & Architecture

- **Project Core:** WP Plugin Publish (`backend/`, `src/`, `wp-plugins/`, `licensing/`).
- **Tech Stack:**
  - Frontend: React 18 + TypeScript + Vite + Tailwind CSS + Radix UI + Zustand + React Query.
  - Backend: Go 1.21+ HTTP server (port 8080) with SQLite (Split DB architecture) + WebSocket hub.
  - Companion WordPress Plugins: `riseup-asia-uploader` and `qupload` (PHP 7.4+ / 8.1+ PSR-4).
  - Licensing Service: Go HMAC-SHA256 licensing server (`licensing/`).
  - Automation & Tooling: 35 Python scripts (`03-ai-scripts/`), cross-platform PowerShell runner (`run.ps1`, `powershell.json`).

## 2. CODE RED Prohibitions (Strictly Avoid)

1. **NEVER disable or bypass CI/CD checks**, GitHub Actions, or validation scripts.
2. **NEVER implement `02-spec/19-main-worker-service/`** in this repo (spec-only; implementation belongs elsewhere).
3. **NEVER write timestamp/date generators** into `readme.txt` (or any file).
4. **NEVER use `file:///` absolute filesystem paths** in markdown, artifacts, or tests.
5. **NEVER commit generated test results**, coverage reports, binaries, or artifacts.
6. **NEVER trigger a release on every commit/turn**; releases require explicit user command.
7. **NEVER evaluate booleans explicitly against `true`** (`== true` / `=== true`). Use implicit evaluation (`if isValid`).
8. **NEVER use British English spelling** (enforce US English: behavior, recognize, initialize).
9. **NEVER invert negative checks** (`!isEmpty`); positive definition checks MUST use `isDefined`.
10. **NEVER upload routine build artifacts** to GitHub Actions storage (enforce Zero-Storage Mandate via `$GITHUB_STEP_SUMMARY`).
11. **NEVER name Go interfaces with non-`er` suffixes** (interfaces MUST end in `er`).
12. **NEVER declare domain structs or generic Result envelopes inline** in implementation files (centralize in `types.go`).
13. **NEVER allow uppercase `README.md`** at root (must strictly be lowercase `readme.md`).
14. **NEVER consolidate or shrink detailed specifications**, domain models, or architecture docs.

## 3. Naming & Coding Standards

- **Booleans:** Prefix with `is` or `has` only (PascalCase `Is*`, `Has*` / camelCase `is*`, `has*` / snake_case `is_*`, `has_*`). All other prefixes (`can`, `should`, `was`, `did`) are prohibited.
- **Acronyms:** PascalCase only (`Ip`, `Url`, `Http`, `Id`, `Hmac`, `Wp`). Never all-caps.
- **Parameters:** Max 2-3 inline parameters; use `*Params` structs for >3 or adjacent same types.
- **Vertical Spacing:** Blank line before `if`, after `}`, before `return`/`throw`. Max 1 consecutive blank line.
- **Multi-line Formatting:** Functions and calls with >2 arguments split across lines with trailing commas.
- **Database:** PascalCase table names (singular) and column names (`UserId`, `CreatedAt`). ORM properties camelCase.

## 4. Error Management Philosophy

- **Three-Tier Architecture:** Delegated PHP -> Go Proxy (`appfault`/`apperror`) -> React Global Error Modal.
- **Never Swallow Errors:** Every catch block must log full exception and trace; wrap with context.
- **Universal Response Envelope:** `{ Status: { IsSuccess, Code, Message }, Attributes: {}, Results: [], Errors: [] }`.
- **No `fmt.Errorf` or raw `errors.New`** crossing package/service boundaries.

## 5. Active Plans & Pending Tasks

- **Pending Plan 01:** `.ai-memory/plans/pending/01-refactor-enums-error-logging.md` (Replace string union types with Enums ending in `Type`, enforce `response.isFail`, implement centralized query wrapper).
- **Pending Plan 02:** `.ai-memory/plans/pending/02-guideline-audit-fixes.md` (Guideline audit fixes across 652+ subtasks).
- **Active Deployment Blockers:** Remote sites require manual `.
un.ps1 -uas` deployment to run v2.30.0+ code and verify EnvelopeBuilder fallback.
