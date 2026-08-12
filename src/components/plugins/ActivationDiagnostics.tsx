import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, CheckCircle2, ExternalLink, Activity, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogEntry, LevelType } from "@/components/shared/LogViewer";
import type { LogEntryDetails } from "@/lib/api";

const MAX_BODY_LENGTH = 500;

enum LogKeywordType {
  ActivateStep = "activate",
  ActivateSubstr = "activat",
  ResolvedIdentifier = "Resolved plugin identifier",
  ActivatingPlugin = "Activating plugin:",
  ActivationFailed = "Activation failed",
  ActivatedSuccessfully = "activated successfully",
  Successfully = "successfully",
  Error404 = "404"
}

enum DiagnosticLabelType {
  ResolvedPluginId = "Resolved Plugin Id",
  ActivationTarget = "Activation Target",
  ErrorMessage = "Error Message",
  RequestUrl = "Request Url",
  HttpMethod = "HTTP Method",
  ResponseStatus = "Response Status",
  ResponseBody = "Response Body",
  Status = "Status",
  StatusSuccess = "✓ Plugin activated successfully",
  Error = "Error"
}

interface ActivationDiagnosticsProps {
  logs: LogEntry[];
  className?: string;
}

enum DiagnosticEntryType {
  Request = "request",
  Response = "response",
  Info = "info",
  Error = "error"
}

interface DiagnosticEntry {
  type: DiagnosticEntryType;
  label: string;
  value: string;
  details?: LogEntryDetails;
}

/**
 * ActivationDiagnostics extracts and highlights activation-specific request/response
 * details from the publish logs to help users troubleshoot activation failures.
 */
export function ActivationDiagnostics({ logs, className }: ActivationDiagnosticsProps) {
  const diagnostics = useMemo(() => {
    const entries: DiagnosticEntry[] = [];
    
    // Find activation-related logs
    const activateLogs = logs.filter(
      (l) => l.step === LogKeywordType.ActivateStep || l.message.toLowerCase().includes(LogKeywordType.ActivateSubstr)
    );

    for (const log of activateLogs) {
      // Extract resolved identifier
      if (log.message.includes(LogKeywordType.ResolvedIdentifier)) {
        const details = log.details;
        if (details?.resolvedIdentifier) {
          entries.push({
            type: DiagnosticEntryType.Info,
            label: DiagnosticLabelType.ResolvedPluginId,
            value: String(details.resolvedIdentifier),
            details,
          });
        }
      }

      // Extract activation request details
      if (log.message.includes(LogKeywordType.ActivatingPlugin)) {
        const match = log.message.match(new RegExp(`${LogKeywordType.ActivatingPlugin}\\s*(.+)`));
        if (match) {
          entries.push({
            type: DiagnosticEntryType.Request,
            label: DiagnosticLabelType.ActivationTarget,
            value: match[1],
          });
        }
      }

      // Extract failed activation with Api error details
      if (log.message.includes(LogKeywordType.ActivationFailed) || log.level === LevelType.Error) {
        const details = log.details;
        
        entries.push({
          type: DiagnosticEntryType.Error,
          label: DiagnosticLabelType.ErrorMessage,
          value: log.message,
        });

        // Extract request details if available
        if (details?.request) {
          const request = details.request as LogEntryDetails;
          if (request.url) {
            entries.push({
              type: DiagnosticEntryType.Request,
              label: DiagnosticLabelType.RequestUrl,
              value: String(request.url),
            });
          }
          if (request.method) {
            entries.push({
              type: DiagnosticEntryType.Request,
              label: DiagnosticLabelType.HttpMethod,
              value: String(request.method),
            });
          }
        }

        // Extract response details if available
        if (details?.response) {
          const response = details.response as LogEntryDetails;
          if (response.status !== undefined) {
            entries.push({
              type: DiagnosticEntryType.Response,
              label: DiagnosticLabelType.ResponseStatus,
              value: String(response.status),
            });
          }
          if (response.body) {
            entries.push({
              type: DiagnosticEntryType.Response,
              label: DiagnosticLabelType.ResponseBody,
              value: typeof response.body === "string" 
                ? response.body.slice(0, MAX_BODY_LENGTH) 
                : JSON.stringify(response.body).slice(0, MAX_BODY_LENGTH),
            });
          }
        }
      }

      // Extract success
      if (log.message.includes(LogKeywordType.ActivatedSuccessfully)) {
        entries.push({
          type: DiagnosticEntryType.Info,
          label: DiagnosticLabelType.Status,
          value: DiagnosticLabelType.StatusSuccess,
        });
      }
    }

    // If no activation logs found, check for general errors
    if (entries.length === 0) {
      const errorLogs = logs.filter((l) => l.level === LevelType.Error);
      for (const log of errorLogs.slice(0, 3)) {
        entries.push({
          type: DiagnosticEntryType.Error,
          label: log.step || DiagnosticLabelType.Error,
          value: log.message,
        });
      }
    }

    return entries;
  }, [logs]);

  const hasErrors = diagnostics.some((d) => d.type === DiagnosticEntryType.Error);
  const hasSuccess = diagnostics.some((d) => d.value.includes(LogKeywordType.Successfully));

  if (diagnostics.length === 0) {
    return (
      <div className={cn("text-center py-6 text-muted-foreground", className)}>
        <Activity className="h-8 w-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">No activation diagnostics available</p>
        <p className="text-xs mt-1">Diagnostics appear after the activate stage runs</p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      {/* Status Banner */}
      <div
        className={cn(
          "flex items-center gap-2 p-3 rounded-lg border",
          hasErrors && "border-destructive/30 bg-destructive/5",
          hasSuccess && !hasErrors && "border-primary/30 bg-primary/5",
          !hasErrors && !hasSuccess && "border-border bg-muted/50"
        )}
      >
        {hasErrors ? (
          <>
            <AlertCircle className="h-5 w-5 text-destructive" />
            <span className="font-medium text-destructive">Activation Failed</span>
          </>
        ) : hasSuccess ? (
          <>
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">Activation Successful</span>
          </>
        ) : (
          <>
            <Activity className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Activation In Progress</span>
          </>
        )}
      </div>

      {/* Diagnostics List */}
      <ScrollArea className="h-48">
        <div className="space-y-2 pr-4">
          {diagnostics.map((entry, idx) => (
            <div
              key={idx}
              className={cn(
                "p-2 rounded-md border text-sm",
                entry.type === DiagnosticEntryType.Error && "border-destructive/30 bg-destructive/5",
                entry.type === DiagnosticEntryType.Request && "border-primary/30 bg-primary/5",
                entry.type === DiagnosticEntryType.Response && "border-accent/30 bg-accent/5",
                entry.type === DiagnosticEntryType.Info && "border-border bg-muted/50"
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                {entry.type === DiagnosticEntryType.Request && <Server className="h-3 w-3 text-primary" />}
                {entry.type === DiagnosticEntryType.Response && <ExternalLink className="h-3 w-3 text-accent-foreground" />}
                {entry.type === DiagnosticEntryType.Error && <AlertCircle className="h-3 w-3 text-destructive" />}
                {entry.type === DiagnosticEntryType.Info && <Activity className="h-3 w-3 text-muted-foreground" />}
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs",
                    entry.type === DiagnosticEntryType.Error && "border-destructive/50 text-destructive",
                    entry.type === DiagnosticEntryType.Request && "border-primary/50 text-primary",
                    entry.type === DiagnosticEntryType.Response && "border-accent/50 text-accent-foreground"
                  )}
                >
                  {entry.label}
                </Badge>
              </div>
              <code className="text-xs font-mono break-all whitespace-pre-wrap">
                {entry.value}
              </code>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Help text for 404 errors */}
      {diagnostics.some((d) => d.value.includes(LogKeywordType.Error404)) && (
        <div className="p-3 rounded-lg bg-muted/50 border border-border text-xs text-muted-foreground">
          <p className="font-medium mb-1">💡 404 Error Troubleshooting:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Ensure the plugin slug matches the folder name in wp-content/plugins/</li>
            <li>Check that the plugin is installed on the remote site</li>
            <li>Verify the plugin's main PHP file matches the expected format (slug/slug.php)</li>
            <li>Try re-uploading the plugin ZIP first</li>
          </ul>
        </div>
      )}
    </div>
  );
}
