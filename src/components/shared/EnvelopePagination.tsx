import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { EnvelopeAttributes, EnvelopeNavigation } from "@/lib/api";

const FALLBACK_TOTAL_PAGES = 1;
const FALLBACK_CURRENT_PAGE = 1;
const FALLBACK_TOTAL_RECORDS = 0;
const FALLBACK_PER_PAGE = 0;
const DEFAULT_WINDOW_SIZE = 5;
const RADIX_DECIMAL = 10;
const MIN_PAGE_NUMBER = 1;
const RECORD_OFFSET = 1;

enum ButtonVariantType {
  Ghost = "ghost",
  Default = "default",
}

enum ButtonSizeType {
  Icon = "icon",
}

export interface PaginationMeta {
  attributes?: EnvelopeAttributes;
  navigation?: EnvelopeNavigation;
}

interface EnvelopePaginationProps {
  meta?: PaginationMeta | null;
  onPageChange: (page: number) => void;
  className?: string;
}

/**
 * Reusable pagination component that reads envelope Navigation & Attributes.
 * Renders nothing when pagination data is absent or there's only one page.
 */
export function EnvelopePagination({ meta, onPageChange, className }: EnvelopePaginationProps) {
  const isMetaAbsent = meta === null || meta === undefined || meta.attributes === undefined;
  if (isMetaAbsent) return null;

  const { TotalRecords, PerPage, TotalPages, CurrentPage } = meta.attributes!;
  const totalPages = TotalPages ?? FALLBACK_TOTAL_PAGES;
  const currentPage = CurrentPage ?? FALLBACK_CURRENT_PAGE;

  const isSinglePageOrLess = totalPages <= MIN_PAGE_NUMBER;
  if (isSinglePageOrLess) return null;

  const totalRecords = TotalRecords ?? FALLBACK_TOTAL_RECORDS;
  const perPage = PerPage ?? FALLBACK_PER_PAGE;
  const nav = meta!.navigation;

  // Build visible page numbers from Navigation.CloserLinks or generate a sliding window
  const hasCloserLinks = nav?.CloserLinks !== undefined && nav.CloserLinks.length > 0;
  const pages: number[] = hasCloserLinks
    ? nav!.CloserLinks!.map(extractPageFromUrl).filter((p): p is number => p !== null)
    : buildPageWindow(currentPage, totalPages);

  const startRecord = (currentPage - MIN_PAGE_NUMBER) * perPage + RECORD_OFFSET;
  const endRecord = Math.min(currentPage * perPage, totalRecords);

  const hasPrevPage = nav?.PrevPage !== undefined && nav.PrevPage !== null;
  const hasNextPage = nav?.NextPage !== undefined && nav.NextPage !== null;
  const isFirstPage = currentPage <= MIN_PAGE_NUMBER;
  const isLastPage = currentPage >= totalPages;

  return (
    <div className={`flex items-center justify-between text-sm text-muted-foreground ${className ?? ""}`}>
      <span>
        Showing {startRecord}–{endRecord} of {totalRecords}
      </span>
      <div className="flex items-center gap-1">
        {/* First page */}
        <Button
          variant={ButtonVariantType.Ghost}
          size={ButtonSizeType.Icon}
          className="h-8 w-8"
          disabled={isFirstPage}
          onClick={() => onPageChange(MIN_PAGE_NUMBER)}
          aria-label="First page"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        {/* Previous */}
        <Button
          variant={ButtonVariantType.Ghost}
          size={ButtonSizeType.Icon}
          className="h-8 w-8"
          disabled={hasPrevPage === false}
          onClick={() => hasPrevPage && onPageChange(extractPageFromUrl(nav!.PrevPage!) ?? currentPage - MIN_PAGE_NUMBER)}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Page numbers */}
        {pages[0] > MIN_PAGE_NUMBER && (
          <span className="px-1 text-muted-foreground/60">…</span>
        )}
        {pages.map((p) => (
          <Button
            key={p}
            variant={p === currentPage ? ButtonVariantType.Default : ButtonVariantType.Ghost}
            size={ButtonSizeType.Icon}
            className="h-8 w-8 text-xs"
            onClick={() => onPageChange(p)}
          >
            {p}
          </Button>
        ))}
        {pages[pages.length - 1] < totalPages && (
          <span className="px-1 text-muted-foreground/60">…</span>
        )}

        {/* Next */}
        <Button
          variant={ButtonVariantType.Ghost}
          size={ButtonSizeType.Icon}
          className="h-8 w-8"
          disabled={hasNextPage === false}
          onClick={() => hasNextPage && onPageChange(extractPageFromUrl(nav!.NextPage!) ?? currentPage + MIN_PAGE_NUMBER)}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Last page */}
        <Button
          variant={ButtonVariantType.Ghost}
          size={ButtonSizeType.Icon}
          className="h-8 w-8"
          disabled={isLastPage}
          onClick={() => onPageChange(totalPages)}
          aria-label="Last page"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

/** Extract page number from a Url string like "/api/v1/plugins?page=3&perPage=10" */
function extractPageFromUrl(url: string): number | null {
  try {
    const match = url.match(/[?&]page=(\d+)/);
    const hasMatch = match !== null;
    return hasMatch ? parseInt(match[1], RADIX_DECIMAL) : null;
  } catch {
    return null;
  }
}

/** Generate a sliding window of page numbers centered on current page */
function buildPageWindow(current: number, total: number, windowSize = DEFAULT_WINDOW_SIZE): number[] {
  const half = Math.floor(windowSize / 2);
  let start = Math.max(MIN_PAGE_NUMBER, current - half);
  const end = Math.min(total, start + windowSize - MIN_PAGE_NUMBER);
  
  const isEndTooSmall = end - start + MIN_PAGE_NUMBER < windowSize;
  if (isEndTooSmall) {
    start = Math.max(MIN_PAGE_NUMBER, end - windowSize + MIN_PAGE_NUMBER);
  }

  const pages: number[] = [];

  for (let i = start; i <= end; i++) pages.push(i);

  return pages;
}
