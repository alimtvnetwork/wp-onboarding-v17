# Subtask 123: Fix violations in backend/internal/logger/Logger.go

Target File: `backend/internal/logger/Logger.go`

## Violations

- **Line 83**: go-loose-types - Type erasure (any/interface{})
  `func (l *Logger) log(level Level, msg string, keyvals ...any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 111**: go-loose-types - Type erasure (any/interface{})
  `func (l *Logger) Debug(msg string, keyvals ...any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 116**: go-loose-types - Type erasure (any/interface{})
  `func (l *Logger) Info(msg string, keyvals ...any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 121**: go-loose-types - Type erasure (any/interface{})
  `func (l *Logger) Warn(msg string, keyvals ...any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 126**: go-loose-types - Type erasure (any/interface{})
  `func (l *Logger) Error(msg string, keyvals ...any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 131**: go-loose-types - Type erasure (any/interface{})
  `func (l *Logger) Fatal(msg string, keyvals ...any) {`
  **Instruction**: Replace any/interface{} with a concrete type.

- **Line 137**: go-loose-types - Type erasure (any/interface{})
  `func (l *Logger) WithContext(keyvals ...any) *Logger {`
  **Instruction**: Replace any/interface{} with a concrete type.

