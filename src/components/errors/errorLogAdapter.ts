import type { ErrorLog } from "@/lib/api";
import type { CapturedError } from "@/stores/errorStore";

const DEFAULT_ERROR_LEVEL = "error" as CapturedError["level"];
const DEFAULT_LINE_NUMBER = 0;
const DEFAULT_FUNCTION_NAME = "";

/**
 * Maps an ErrorLog (backend Api shape) to a minimal CapturedError
 * so it can be used with generateCompactReport / generateErrorReport.
 */
export function errorLogToCapturedError(error: ErrorLog): CapturedError {
  return {
    id: String(error.id),
    code: error.code,
    level: (error.level as CapturedError["level"]) || DEFAULT_ERROR_LEVEL,
    message: error.message,
    details: error.details,
    createdAt: error.createdAt,
    context: error.context as CapturedError["context"],
    backendStackTrace: error.stackTrace,
    parsedFrames: error.file
      ? [{ file: error.file, line: error.line ?? DEFAULT_LINE_NUMBER, function: error.function ?? DEFAULT_FUNCTION_NAME }]
      : undefined,
  } as CapturedError;
}
