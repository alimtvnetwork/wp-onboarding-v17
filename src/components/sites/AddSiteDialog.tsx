import { useState, useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSiteFormPersistence } from "@/hooks/useSiteFormPersistence";
import { useConnectionTestLogs } from "@/hooks/useConnectionTestLogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConnectionTestLogs } from "@/components/sites/ConnectionTestLogs";
import { CategorySelect } from "@/components/shared/CategorySelect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Loader2,
  TestTube,
  CheckCircle,
  XCircle,
  RefreshCw,
  Package,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { api, ApiError, Plugin, ConnectionStatusType } from "@/lib/api";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useErrorStore } from "@/stores/errorStore";

enum TabType {
  Basic = "basic",
  Connection = "connection",
  Plugins = "plugins",
}

enum AddSiteFieldType {
  Name = "name",
  Url = "url",
  Username = "username",
  Password = "password",
}

enum QueryKeyType {
  Plugins = "plugins",
  Sites = "sites",
}

enum EndpointType {
  SitesTest = "/sites/test",
  Sites = "/sites",
}

enum MethodType {
  Post = "POST",
}

enum ToastMessageType {
  MissingFieldsTest = "Url, username, and password are required to test",
  ConnectionSuccessful = "Connection successful!",
  ConnectionFailed = "Connection failed",
  ConnectionTestFailed = "Connection test failed",
  AllFieldsRequired = "All fields are required",
  SiteAddedSuccessfully = "Site added successfully",
  FailedToAddSite = "Failed to add site",
}

enum ToastDescriptionType {
  ClickForDetails = "Click for details",
}

enum ToastActionLabelType {
  ViewDetails = "View Details",
}

enum NumberType {
  ToastDuration = 10000,
  Zero = 0,
}

enum LoggerSourceType {
  HandleTestCredentials = "AddSiteDialog.handleTestCredentials",
  HandleAddSite = "AddSiteDialog.handleAddSite",
}

enum LoggerComponentType {
  AddSiteDialog = "AddSiteDialog",
}

enum LoggerActionType {
  TestConnection = "test_connection",
  SaveClicked = "save_clicked",
}

interface AddSiteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  debugMode?: boolean;
}

export function AddSiteDialog({ open, onOpenChange, debugMode = false }: AddSiteDialogProps) {
  const queryClient = useQueryClient();
  const { captureError, captureException, openErrorModal } = useErrorStore();
  const connectionLogs = useConnectionTestLogs();
  const { formData, handleInputChange, clearForm } = useSiteFormPersistence();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTestingCredentials, setIsTestingCredentials] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>(TabType.Basic);
  const [category, setCategory] = useState<string | null>(null);
  const [credentialsTestResult, setCredentialsTestResult] = useState<{
    success: boolean;
    message: string;
    siteName?: string;
    canManagePlugins?: boolean;
    testedAt?: string;
  } | null>(null);
  
  // Plugin selection state
  const [selectedPluginIds, setSelectedPluginIds] = useState<number[]>([]);
  const [pluginSearch, setPluginSearch] = useState("");

  // Fetch all plugins for the Plugins tab
  const { data: allPlugins } = useQuery({
    queryKey: [QueryKeyType.Plugins],
    queryFn: async () => {
      try {
        const response = await api.getPlugins();
        return response.success === true ? response.data || [] : [];
      } catch (e: unknown) {
        console.warn("[AddSiteDialog] Failed to fetch plugins:", e);
        return [];
      }
    },
    enabled: open === true,
  });

  // Reset state when dialog closes
  useEffect(() => {
    if (open === false) {
      setCredentialsTestResult(null);
      connectionLogs.clearLogs();
      setActiveTab(TabType.Basic);
      setCategory(null);
      setSelectedPluginIds([]);
      setPluginSearch("");
    }
  }, [open]);

  const showErrorWithModal = (apiError: ApiError, meta?: { endpoint?: string; method?: string; requestBody?: unknown }) => {
    const captured = captureError(apiError, meta);
    toast.error(apiError.message, {
      description: "Click for details",
      action: { label: "View Details", onClick: () => openErrorModal(captured) },
      duration: 10000,
    });
  };

  const handleFieldChange = useCallback((field: AddSiteFieldType, value: string) => {
    handleInputChange(field, value);
    // Only clear test result if credentials change
    if (field === AddSiteFieldType.Url || field === AddSiteFieldType.Username || field === AddSiteFieldType.Password) {
      setCredentialsTestResult(null);
    }
  }, [handleInputChange]);

  const handleTestCredentials = async () => {
    if (formData.url === "" || formData.username === "" || formData.password === "") {
      toast.error(ToastMessageType.MissingFieldsTest);
      return;
    }

    setIsTestingCredentials(true);
    setCredentialsTestResult(null);
    connectionLogs.clearLogs();

    try {
      const response = await api.testCredentials({
        url: formData.url,
        username: formData.username,
        password: formData.password,
      });

      if (response.success && response.data !== undefined) {
        if (response.data.isSuccess) {
          setCredentialsTestResult({
            success: true,
            message: response.data.message || "Connection successful",
            siteName: response.data.siteName,
            canManagePlugins: response.data.canManagePlugins,
            testedAt: new Date().toISOString(),
          });
          toast.success(ToastMessageType.ConnectionSuccessful, {
            description: response.data.siteName || response.data.message,
          });
        } else {
          setCredentialsTestResult({
            success: false,
            message: response.data.message || "Connection failed",
          });
          toast.error(ToastMessageType.ConnectionFailed, { description: response.data.message });
        }
      } else if (response.error !== undefined) {
        setCredentialsTestResult({ success: false, message: response.error.message });
        showErrorWithModal(response.error, {
          endpoint: EndpointType.Sites,
          method: MethodType.Post,
          requestBody: { ...requestBody, applicationPassword: "***" },
        });
      }
    } catch (error: unknown) {
      const captured = captureException(error, { 
        source: "AddSiteDialog.handleTestCredentials",
        triggerComponent: "AddSiteDialog",
        triggerAction: "test_connection",
        endpoint: "/sites/test", 
        method: "POST" 
      });
      setCredentialsTestResult({
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      });
      toast.error("Connection test failed", {
        description: "Click for details",
        action: { label: "View Details", onClick: () => openErrorModal(captured) },
        duration: 10000,
      });
    } finally {
      setIsTestingCredentials(false);
    }
  };

  const togglePluginSelection = (pluginId: number) => {
    setSelectedPluginIds((prev) =>
      prev.includes(pluginId)
        ? prev.filter((id) => id !== pluginId)
        : [...prev, pluginId]
    );
  };

  const handleAddSite = async () => {
    if (formData.name === "" || formData.url === "" || formData.username === "" || formData.password === "") {
      toast.error(ToastMessageType.AllFieldsRequired);
      return;
    }

    const requestBody = {
      name: formData.name,
      url: formData.url,
      username: formData.username,
      applicationPassword: formData.password,
      category: category || undefined,
      // If connection was tested successfully, pass that info
      ...(credentialsTestResult?.success && {
        connectionStatus: ConnectionStatusType.Connected,
        testedAt: credentialsTestResult.testedAt,
      }),
    };

    setIsSubmitting(true);
    try {
      const response = await api.createSite(requestBody);
      if (response.success && response.data !== undefined) {
        const newSiteId = response.data.id;
        
        // Create plugin mappings for selected plugins
        if (selectedPluginIds.length > NumberType.Zero && newSiteId !== undefined) {
          for (const pluginId of selectedPluginIds) {
            try {
              const plugin = allPlugins?.find((p) => p.id === pluginId);
              const pluginMappingsRes = await api.getPluginMappings(pluginId);
              if (pluginMappingsRes.success && pluginMappingsRes.data !== undefined) {
                const currentSiteIds = pluginMappingsRes.data.map((m) => m.siteId);
                if (currentSiteIds.includes(newSiteId) === false) {
                  const remoteSlug = pluginMappingsRes.data[0]?.remoteSlug || 
                    (plugin?.name || "plugin").toLowerCase().replace(/\s+/g, '-');
                  await api.updatePluginMappings(pluginId, { 
                    siteIds: [...currentSiteIds, newSiteId], 
                    remoteSlug 
                  });
                }
              }
            } catch (e: unknown) {
              console.warn(`[AddSiteDialog] Failed to create mapping for plugin ${pluginId}:`, e);
            }
          }
        }
        
        toast.success(ToastMessageType.SiteAddedSuccessfully);
        queryClient.invalidateQueries({ queryKey: [QueryKeyType.Sites] });
        queryClient.invalidateQueries({ queryKey: [QueryKeyType.Plugins] });
        onOpenChange(false);
        clearForm();
      } else if (response.error !== undefined) {
        showErrorWithModal(response.error, {
          endpoint: "/sites",
          method: "POST",
          requestBody: { ...requestBody, applicationPassword: "***" },
        });
      }
    } catch (error: unknown) {
      const captured = captureException(error, {
        source: "AddSiteDialog.handleAddSite",
        triggerComponent: "AddSiteDialog",
        triggerAction: "save_clicked",
        endpoint: "/sites",
        method: "POST",
        requestBody: { ...requestBody, applicationPassword: "***" },
        context: { selectedPluginCount: selectedPluginIds.length }
      });
      toast.error("Failed to add site", {
        description: "Click for details",
        action: { label: "View Details", onClick: () => openErrorModal(captured) },
        duration: 10000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const canTest = formData.url !== "" && formData.username !== "" && formData.password !== "";
  const canSave = formData.name !== "" && formData.url !== "" && formData.username !== "" && formData.password !== "";
  
  // Filter plugins by search
  const filteredPlugins = (allPlugins || []).filter((plugin) =>
    plugin.name.toLowerCase().includes(pluginSearch.toLowerCase()) ||
    plugin.path.toLowerCase().includes(pluginSearch.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Add WordPress Site
            {credentialsTestResult?.success && (
              <span className="inline-flex items-center gap-1 text-xs font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                <CheckCircle className="h-3 w-3" />
                Connected
              </span>
            )}
          </DialogTitle>
          <DialogDescription>
            Connect a WordPress site using its Rest Api credentials.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value={TabType.Basic}>Basic</TabsTrigger>
            <TabsTrigger value={TabType.Connection}>Connection</TabsTrigger>
            <TabsTrigger value={TabType.Plugins}>Plugins</TabsTrigger>
          </TabsList>

          <TabsContent value={TabType.Basic} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Site Name</Label>
              <Input
                id="name"
                placeholder="My WordPress Site"
                value={formData.name}
                onChange={(e) => handleFieldChange(AddSiteFieldType.Name, e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="url">Site Url</Label>
              <Input
                id="url"
                placeholder="https://example.com"
                value={formData.url}
                onChange={(e) => handleFieldChange(AddSiteFieldType.Url, e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <CategorySelect
                value={category}
                onValueChange={setCategory}
                placeholder="Select category..."
              />
            </div>
          </TabsContent>

          <TabsContent value={TabType.Connection} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="admin"
                value={formData.username}
                onChange={(e) => handleFieldChange(AddSiteFieldType.Username, e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Application Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="xxxx xxxx xxxx xxxx xxxx xxxx"
                value={formData.password}
                onChange={(e) => handleFieldChange(AddSiteFieldType.Password, e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Generate an application password in WordPress under Users → Profile
              </p>
            </div>

            {/* Connection Test Result */}
            {credentialsTestResult && (
              <div
                className={cn(
                  "p-3 rounded-lg border",
                  credentialsTestResult.success
                    ? "bg-primary/5 border-primary/20"
                    : "bg-destructive/5 border-destructive/20"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {credentialsTestResult.success ? (
                      <CheckCircle className="h-4 w-4 text-primary" />
                    ) : (
                      <XCircle className="h-4 w-4 text-destructive" />
                    )}
                    <span
                      className={cn(
                        "text-sm font-medium",
                        credentialsTestResult.success ? "text-primary" : "text-destructive"
                      )}
                    >
                      {credentialsTestResult.success ? "Connected" : "Connection Failed"}
                    </span>
                  </div>
                  {credentialsTestResult.success && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleTestCredentials}
                      disabled={isTestingCredentials}
                      className="h-7 text-xs"
                    >
                      {isTestingCredentials === true ? (
                        <Loader2 className="h-3 w-3 animate-spin mr-1" />
                      ) : (
                        <RefreshCw className="h-3 w-3 mr-1" />
                      )}
                      Retest
                    </Button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {credentialsTestResult.message}
                </p>
                {credentialsTestResult.siteName && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Site: {credentialsTestResult.siteName}
                  </p>
                )}
                {credentialsTestResult.success && credentialsTestResult.canManagePlugins === false && (
                  <p className="text-xs text-destructive mt-1">
                    ⚠️ User cannot manage plugins - publishing may fail
                  </p>
                )}
              </div>
            )}

            {/* Test Button */}
            {!credentialsTestResult?.success && (
              <Button
                variant="secondary"
                className="w-full"
                onClick={handleTestCredentials}
                disabled={isTestingCredentials === true || canTest === false}
              >
                {isTestingCredentials === true ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <TestTube className="h-4 w-4 mr-2" />
                )}
                Test Connection
              </Button>
            )}

            {/* Connection Test Logs */}
            {connectionLogs.steps.length > NumberType.Zero && (
              <ConnectionTestLogs
                steps={connectionLogs.steps}
                isActive={connectionLogs.isActive}
                onClear={connectionLogs.clearLogs}
                debugMode={debugMode}
              />
            )}
          </TabsContent>

          <TabsContent value={TabType.Plugins} className="space-y-4 pt-4">
            <p className="text-sm text-muted-foreground">
              Select plugins to deploy to this site after creation.
            </p>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search plugins..."
                value={pluginSearch}
                onChange={(e) => setPluginSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            
            {filteredPlugins.length > NumberType.Zero ? (
              <div className="space-y-2 max-h-[200px] overflow-y-auto">
                {filteredPlugins.map((plugin: Plugin) => (
                  <div
                    key={plugin.id}
                    className={cn(
                      "flex items-center space-x-3 p-2 rounded-lg border cursor-pointer transition-colors",
                      selectedPluginIds.includes(plugin.id) === true
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted/50"
                    )}
                    onClick={() => togglePluginSelection(plugin.id)}
                  >
                    <Checkbox
                      checked={selectedPluginIds.includes(plugin.id) === true}
                      onCheckedChange={() => togglePluginSelection(plugin.id)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Package className="h-4 w-4 text-primary shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{plugin.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{plugin.path}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : allPlugins !== undefined && allPlugins.length === NumberType.Zero ? (
              <div className="text-center py-6 text-muted-foreground">
                <Package className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No plugins registered yet.</p>
                <p className="text-xs">Register plugins from the Plugins page first.</p>
              </div>
            ) : pluginSearch ? (
              <div className="text-center py-6 text-muted-foreground">
                <p className="text-sm">No plugins match "{pluginSearch}"</p>
              </div>
            ) : null}
            
            {selectedPluginIds.length > NumberType.Zero && (
              <div className="flex flex-wrap gap-1.5 pt-2 border-t">
                {selectedPluginIds.map((pluginId) => {
                  const plugin = allPlugins?.find((p: Plugin) => p.id === pluginId);
                  return plugin ? (
                    <Badge key={pluginId} variant="secondary" className="text-xs">
                      <Package className="h-3 w-3 mr-1" />
                      {plugin.name}
                    </Badge>
                  ) : null;
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex-col sm:flex-row gap-2 pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddSite} disabled={isSubmitting === true || canSave === false}>
            {isSubmitting === true && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            {credentialsTestResult?.success ? "Save Site" : "Add Site"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}