// TypeScript types for the licensing admin dashboard.

// ── Enum-aligned string unions ──────────────────────────

export enum LicenseStatusType {
  Active = "active",
  Expired = "expired",
  Suspended = "suspended",
  Revoked = "revoked"
}

export enum LicenseType {
  Standard = "standard",
  Professional = "professional",
  Enterprise = "enterprise"
}

export enum ProductType {
  RiseupUploader = "riseup-uploader"
}

export enum AuditActionType {
  Created = "created",
  Activated = "activated",
  Deactivated = "deactivated",
  Validated = "validated",
  Expired = "expired",
  Revoked = "revoked",
  Updated = "updated",
  Deleted = "deleted"
}

// ── Domain models (match Go JSON output) ────────────────

export interface License {
  id: number;
  key: string;
  email: string;
  product: ProductType;
  type: LicenseType;
  status: LicenseStatusType;
  max_activations: number;
  notes?: string;
  created_at: string;
  expires_at?: string | null;
  updated_at: string;
}

export interface Activation {
  id: number;
  license_id: number;
  domain: string;
  ip_address?: string;
  user_agent?: string;
  activated_at: string;
  deactivated_at?: string | null;
}

export interface AuditLog {
  id: number;
  license_id?: number | null;
  action: AuditActionType;
  domain?: string;
  ip_address?: string;
  details?: unknown;
  created_at: string;
}

// ── Request DTOs ────────────────────────────────────────

export interface CreateLicenseInput {
  email: string;
  product: ProductType;
  type: LicenseType;
  maxActivations: number;
  notes?: string;
}

export interface UpdateLicenseInput {
  status?: LicenseStatusType;
  type?: LicenseType;
  maxActivations?: number;
  notes?: string;
}

// ── License + activations (status endpoint) ─────────────

export interface LicenseWithActivations {
  license: License;
  activations: Activation[];
}
