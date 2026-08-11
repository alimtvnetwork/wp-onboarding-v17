package apperror

import (
	"encoding/json"
	"fmt"
)

// appErrorJson is an alias used to prevent infinite recursion during Json marshaling.
type appErrorJson struct {
	Code       ErrorCode
	Message    string
	Details    string            `json:",omitempty"`
	Values     map[string]string `json:",omitempty"`
	Diagnostic ErrorDiagnostic   `json:",omitempty"`
	Stack      StackTrace
	Cause      string `json:",omitempty"`
}

// MarshalJSON serializes AppError to Json, converting Cause to a string message.
func (e *AppError) MarshalJSON() ([]byte, error) {
	alias := appErrorJson{
		Code:       e.Code,
		Message:    e.Message,
		Details:    e.Details,
		Values:     e.Values,
		Diagnostic: e.Diagnostic,
		Stack:      e.Stack,
	}

	if e.Cause != nil {
		alias.Cause = e.Cause.Error()
	}

	return json.Marshal(alias)
}

// UnmarshalJSON deserializes Json into AppError, restoring Cause as a plain error.
func (e *AppError) UnmarshalJSON(data []byte) error {
	var alias appErrorJson
	err := json.Unmarshal(data, &alias)

	if err != nil {
		return Wrap(err, ErrValidation, fmt.Sprintf("apperror.UnmarshalJSON: failed to decode AppError (received %d bytes: %s)", len(data), truncateData(data, 200)))
	}

	e.Code = alias.Code
	e.Message = alias.Message
	e.Details = alias.Details
	e.Values = alias.Values
	e.Diagnostic = alias.Diagnostic
	e.Stack = alias.Stack

	if alias.Cause != "" {
		e.Cause = &plainError{msg: alias.Cause}
	}

	return nil
}

// truncateData returns a string preview of raw Json data, capped at maxLen bytes.
func truncateData(data []byte, maxLen int) string {
	if len(data) <= maxLen {
		return string(data)
	}

	return string(data[:maxLen]) + "..."
}

// plainError is a minimal error implementation for deserialized cause strings.
type plainError struct {
	msg string
}

func (e *plainError) Error() string {
	return e.msg
}
