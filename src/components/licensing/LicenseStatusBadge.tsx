// License status badge component.

import { Badge } from "@/components/ui/badge";
import { LicenseStatusType } from "@/types/licensing";

const statusConfig: Record<LicenseStatusType, { label: string; variant: "default" | "destructive" | "secondary" | "outline" }> = {
  [LicenseStatusType.Active]: { label: "Active", variant: "default" },
  [LicenseStatusType.Expired]: { label: "Expired", variant: "destructive" },
  [LicenseStatusType.Suspended]: { label: "Suspended", variant: "secondary" },
  [LicenseStatusType.Revoked]: { label: "Revoked", variant: "destructive" },
};

interface Props {
  status: LicenseStatusType;
}

export function LicenseStatusBadge({ status }: Props) {
  const config = statusConfig[status] ?? { label: status, variant: "outline" as const };

  return (
    <Badge variant={config.variant} className="capitalize text-xs">
      {config.label}
    </Badge>
  );
}
