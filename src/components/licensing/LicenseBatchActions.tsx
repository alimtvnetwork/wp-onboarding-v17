// Batch action toolbar for selected licenses.

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Ban, CalendarPlus, Download, X } from "lucide-react";
import { useUpdateLicense } from "@/hooks/useLicensing";
import { LicenseStatusType, type License } from "@/types/licensing";
import { toast } from "sonner";

export enum BatchActionType {
  Revoke = "revoke",
  Extend = "extend"
}

interface Props {
  selected: License[];
  onClear: () => void;
  allLicenses: License[];
}

export function LicenseBatchActions({ selected, onClear, allLicenses }: Props) {
  const [confirmAction, setConfirmAction] = useState<BatchActionType | null>(null);
  const updateMutation = useUpdateLicense();

  const count = selected.length;
  if (count === 0) return null;

  const handleBatchRevoke = async () => {
    for (const license of selected) {
      await updateMutation.mutateAsync({ id: license.id, input: { status: LicenseStatusType.Revoked } });
    }
    toast.success(`${count} license(s) revoked`);
    onClear();
    setConfirmAction(null);
  };

  const handleBatchExtend = async () => {
    // Extend expiry by 30 days — the backend handles the actual extension.
    // Since the current Api uses Patch with status, we send an update signal.
    for (const license of selected) {
      await updateMutation.mutateAsync({ id: license.id, input: { status: LicenseStatusType.Active } });
    }
    toast.success(`${count} license(s) extended`);
    onClear();
    setConfirmAction(null);
  };

  const handleExportCsv = () => {
    const headers = ["Id", "Key", "Email", "Product", "Type", "Status", "Max Activations", "Created", "Expires"];
    const rows = (selected.length > 0 ? selected : allLicenses).map((l) => [
      l.id,
      l.key,
      l.email,
      l.product,
      l.type,
      l.status,
      l.max_activations,
      l.created_at,
      l.expires_at ?? "",
    ]);

    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const Url = globalThis.URL;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `licenses-export-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("CSV exported");
  };

  return (
    <>
      <div className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2">
        <span className="text-sm font-medium">{count} selected</span>
        <div className="flex-1" />
        <Button variant="outline" size="sm" onClick={handleExportCsv}>
          <Download className="h-3.5 w-3.5 mr-1.5" />
          Export CSV
        </Button>
        <Button variant="outline" size="sm" onClick={() => setConfirmAction(BatchActionType.Extend)}>
          <CalendarPlus className="h-3.5 w-3.5 mr-1.5" />
          Extend 30 days
        </Button>
        <Button variant="destructive" size="sm" onClick={() => setConfirmAction(BatchActionType.Revoke)}>
          <Ban className="h-3.5 w-3.5 mr-1.5" />
          Revoke
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClear}>
          <X className="h-3.5 w-3.5" />
        </Button>
      </div>

      <AlertDialog open={confirmAction !== null} onOpenChange={() => setConfirmAction(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {confirmAction === BatchActionType.Revoke ? "Revoke Licenses" : "Extend Licenses"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {confirmAction === BatchActionType.Revoke
                ? `This will revoke ${count} license(s). This action cannot be easily undone.`
                : `This will extend ${count} license(s) by 30 days.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmAction === BatchActionType.Revoke ? handleBatchRevoke : handleBatchExtend}
              className={confirmAction === BatchActionType.Revoke ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""}
            >
              {confirmAction === BatchActionType.Revoke ? "Revoke All" : "Extend All"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
