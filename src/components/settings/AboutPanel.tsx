import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, GitCommit, Clock, Terminal, FileText } from "lucide-react";
import { useVersionInfo } from "@/hooks/useWhatsNew";
import { CopyDiagnosticsButton } from "@/components/shared/CopyDiagnosticsButton";

const DEFAULT_APP_NAME = "WP Plugin Publish";
const DEFAULT_APP_VERSION = "0.0.0";
const GIT_COMMIT_START_INDEX = 0;
const GIT_COMMIT_END_INDEX = 7;
const APP_CHANGELOG_URL = "https://github.com/riseup-asia/wp-onboarding-v17/blob/main/CHANGELOG.md";
const SCRIPT_CHANGELOG_URL = "https://github.com/riseup-asia/wp-onboarding-v17/blob/main/spec/powershell-integration/CHANGELOG.md";

export function AboutPanel() {
  const { data: versionInfo } = useVersionInfo();

  const appName = versionInfo?.appName || DEFAULT_APP_NAME;
  const appVersion = versionInfo?.version || DEFAULT_APP_VERSION;
  const gitCommit = versionInfo?.gitCommit;
  const buildTime = versionInfo?.buildTime;
  const scriptVersion = versionInfo?.scriptVersion;

  return (
    <div id="about" className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-1">About</h2>
        <p className="text-sm text-muted-foreground">Application info and diagnostics</p>
      </div>

      <div className="space-y-4">
        {/* App Info */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{appName}</span>
          <Badge variant="outline" className="font-mono">
            v{appVersion}
          </Badge>
        </div>

        {/* Build Metadata */}
        {(gitCommit || buildTime) && (
          <div className="space-y-2 text-sm">
            {gitCommit && (
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-1">
                  <GitCommit className="h-3 w-3" />
                  Git Commit
                </span>
                <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                  {gitCommit.substring(GIT_COMMIT_START_INDEX, GIT_COMMIT_END_INDEX)}
                </code>
              </div>
            )}
            {buildTime && (
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Build Time
                </span>
                <span className="text-xs">{buildTime}</span>
              </div>
            )}
          </div>
        )}

        {/* Script Version */}
        {scriptVersion && (
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Terminal className="h-3 w-3" />
              PowerShell Script
            </span>
            <Badge variant="secondary" className="font-mono text-xs">
              v{scriptVersion}
            </Badge>
          </div>
        )}

        <Separator />

        {/* Changelogs */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Changelogs</p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href={APP_CHANGELOG_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-3 w-3 mr-1" />
                App Changelog
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href={SCRIPT_CHANGELOG_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Terminal className="h-3 w-3 mr-1" />
                Script Changelog
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>

        <Separator />

        {/* Copy Diagnostics */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Diagnostics</p>
            <p className="text-xs text-muted-foreground">
              Copy Api Urls and version info for support
            </p>
          </div>
          <CopyDiagnosticsButton variant="outline" size="sm" />
        </div>
      </div>
    </div>
  );
}

export default AboutPanel;
