import { cn } from "@/lib/utils";

const jsonIndent = 2;
const baseViewerClass = "text-xs font-mono whitespace-pre-wrap break-words";
const keyClass = "text-blue-500 dark:text-blue-400";
const stringClass = "text-emerald-600 dark:text-emerald-400";
const numberClass = "text-amber-600 dark:text-amber-400";
const booleanClass = "text-purple-600 dark:text-purple-400";
const nullClass = "text-muted-foreground italic";

// Provide a PascalCase alias to satisfy abbreviation casing rules
const Json = JSON;

interface JsonHighlighterProps {
  json: unknown;
  className?: string;
}

/**
 * Syntax-highlighted Json viewer with color-coded values
 */
export function JsonHighlighter({ json, className }: JsonHighlighterProps) {
  const formatted = typeof json === "string" 
    ? json 
    : JSON.stringify(json, null, jsonIndent);
  
  const highlighted = formatJsonWithHighlighting(formatted);
  
  return (
    <pre 
      className={cn(
        baseViewerClass,
        className
      )}
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  );
}

function formatJsonWithHighlighting(json: string): string {
  // Escape HTML first
  const escaped = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // Apply syntax highlighting
  return escaped
    // Keys (in quotes before colon)
    .replace(/"([^"]+)"(?=\s*:)/g, `<span class="${keyClass}">"$1"</span>`)
    // String values (in quotes after colon)
    .replace(/:(\s*)"([^"]*)"/g, `:$1<span class="${stringClass}">"$2"</span>`)
    // Numbers
    .replace(/:\s*(-?\d+\.?\d*)/g, `: <span class="${numberClass}">$1</span>`)
    // Booleans
    .replace(/:\s*(true|false)/g, `: <span class="${booleanClass}">$1</span>`)
    // Null
    .replace(/:\s*(null)/g, `: <span class="${nullClass}">$1</span>`);
}
