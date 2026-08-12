const fs = require('fs');
const file = 'd:/work/wp-onboarding/src/components/sites/AddSiteDialog.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Enums
content = content.replace(
  'import { useErrorStore } from "@/stores/errorStore";',
  `import { useErrorStore } from "@/stores/errorStore";

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
}`
);

// 2. States and queries
content = content.replace(/useState\("basic"\)/, 'useState<TabType>(TabType.Basic)');
content = content.replace(/queryKey: \["plugins"\]/g, 'queryKey: [QueryKeyType.Plugins]');
content = content.replace(/queryKey: \["sites"\]/g, 'queryKey: [QueryKeyType.Sites]');
content = content.replace(/response\.success \? response\.data \|\| \[\] : \[\]/, 'response.success === true ? response.data || [] : []');
content = content.replace(/enabled: open,/, 'enabled: open === true,');
content = content.replace(/if \(\!open\)/, 'if (open === false)');
content = content.replace(/setActiveTab\("basic"\)/, 'setActiveTab(TabType.Basic)');

// 3. showErrorWithModal and new showExceptionWithModal
content = content.replace(
  /const showErrorWithModal = [\s\S]*?10000,\n    \}\);\n  \};/,
  `const showErrorWithModal = (apiError: ApiError, meta?: { endpoint?: string; method?: string; requestBody?: unknown }) => {
    const captured = captureError(apiError, meta);
    toast.error(apiError.message, {
      description: ToastDescriptionType.ClickForDetails,
      action: { label: ToastActionLabelType.ViewDetails, onClick: () => openErrorModal(captured) },
      duration: NumberType.ToastDuration,
    });
  };

  const showExceptionWithModal = (title: string, error: unknown, meta: any) => {
    const captured = captureException(error, meta);
    toast.error(title, {
      description: ToastDescriptionType.ClickForDetails,
      action: { label: ToastActionLabelType.ViewDetails, onClick: () => openErrorModal(captured) },
      duration: NumberType.ToastDuration,
    });
  };`
);

// 4. handleFieldChange
content = content.replace(
  /const handleFieldChange = useCallback\(\(field: "name" \| "url" \| "username" \| "password", value: string\) => \{[\s\S]*?\}, \[handleInputChange\]\);/,
  `const handleFieldChange = useCallback((field: AddSiteFieldType, value: string) => {
    handleInputChange(field, value);
    // Only clear test result if credentials change
    if (field === AddSiteFieldType.Url || field === AddSiteFieldType.Username || field === AddSiteFieldType.Password) {
      setCredentialsTestResult(null);
    }
  }, [handleInputChange]);`
);

// 5. handleTestCredentials
content = content.replace(
  /if \(\!(?:formData\.url) \|\| \!(?:formData\.username) \|\| \!(?:formData\.password)\)/,
  'if (formData.url === "" || formData.username === "" || formData.password === "")'
);
content = content.replace(
  /toast\.error\("URL, username, and password are required to test"\);/i,
  'toast.error(ToastMessageType.MissingFieldsTest);'
);

content = content.replace(/if \(response\.success && response\.data\)/g, 'if (response.success === true && response.data !== undefined)');
content = content.replace(/if \(response\.data\.isSuccess\)/, 'if (response.data.isSuccess === true)');
content = content.replace(/toast\.success\("Connection successful!"/g, 'toast.success(ToastMessageType.ConnectionSuccessful');
content = content.replace(/toast\.error\("Connection failed"/g, 'toast.error(ToastMessageType.ConnectionFailed');

content = content.replace(/\} else if \(response\.error\) \{/g, '} else if (response.error !== undefined) {');
content = content.replace(/showErrorWithModal\(response\.error, \{ endpoint: "\/sites\/test", method: "POST" \}\);/, 'showErrorWithModal(response.error, { endpoint: EndpointType.SitesTest, method: MethodType.Post });');

content = content.replace(
  /      const captured = captureException\([\s\S]*?duration: 10000,\n      \}\);/,
  `      showExceptionWithModal(ToastMessageType.ConnectionTestFailed, error, { 
        source: LoggerSourceType.HandleTestCredentials,
        triggerComponent: LoggerComponentType.AddSiteDialog,
        triggerAction: LoggerActionType.TestConnection,
        endpoint: EndpointType.SitesTest, 
        method: MethodType.Post 
      });`
);

// 6. handleAddSite
content = content.replace(
  /if \(\!(?:formData\.name) \|\| \!(?:formData\.url) \|\| \!(?:formData\.username) \|\| \!(?:formData\.password)\)/,
  'if (formData.name === "" || formData.url === "" || formData.username === "" || formData.password === "")'
);
content = content.replace(/toast\.error\("All fields are required"\);/, 'toast.error(ToastMessageType.AllFieldsRequired);');
content = content.replace(/credentialsTestResult\?\.success && \{/g, 'credentialsTestResult?.success === true && {');

content = content.replace(/if \(selectedPluginIds\.length > 0 && newSiteId\)/, 'if (selectedPluginIds.length > NumberType.Zero && newSiteId !== undefined)');
content = content.replace(/if \(pluginMappingsRes\.success && pluginMappingsRes\.data\)/, 'if (pluginMappingsRes.success === true && pluginMappingsRes.data !== undefined)');
content = content.replace(/if \(\!currentSiteIds\.includes\(newSiteId\)\)/, 'if (currentSiteIds.includes(newSiteId) === false)');

content = content.replace(/toast\.success\("Site added successfully"\);/, 'toast.success(ToastMessageType.SiteAddedSuccessfully);');

content = content.replace(/showErrorWithModal\(response\.error, \{[\s\S]*?\}\);/, `showErrorWithModal(response.error, {
          endpoint: EndpointType.Sites,
          method: MethodType.Post,
          requestBody: { ...requestBody, applicationPassword: "***" },
        });`);

content = content.replace(
  /      const captured = captureException\(error, \{[\s\S]*?duration: 10000,\n      \}\);/,
  `      showExceptionWithModal(ToastMessageType.FailedToAddSite, error, {
        source: LoggerSourceType.HandleAddSite,
        triggerComponent: LoggerComponentType.AddSiteDialog,
        triggerAction: LoggerActionType.SaveClicked,
        endpoint: EndpointType.Sites,
        method: MethodType.Post,
        requestBody: { ...requestBody, applicationPassword: "***" },
        context: { selectedPluginCount: selectedPluginIds.length }
      });`
);

// 7. canTest and canSave
content = content.replace(/const canTest = formData\.url && formData\.username && formData\.password;/, 'const canTest = formData.url !== "" && formData.username !== "" && formData.password !== "";');
content = content.replace(/const canSave = formData\.name && formData\.url && formData\.username && formData\.password;/, 'const canSave = formData.name !== "" && formData.url !== "" && formData.username !== "" && formData.password !== "";');
content = content.replace(/filteredPlugins\.length > 0/g, 'filteredPlugins.length > NumberType.Zero');
content = content.replace(/allPlugins && allPlugins\.length === 0/g, 'allPlugins !== undefined && allPlugins.length === NumberType.Zero');
content = content.replace(/selectedPluginIds\.length > 0/g, 'selectedPluginIds.length > NumberType.Zero');

// 8. Abbreviations & Boolean JSX
content = content.replace(/credentialsTestResult\?\.success && \(/g, 'credentialsTestResult?.success === true && (');
content = content.replace(/credentialsTestResult\.success \?/g, 'credentialsTestResult.success === true ?');
content = content.replace(/\!credentialsTestResult\?\.success/g, 'credentialsTestResult?.success !== true');
content = content.replace(/isTestingCredentials \?/g, 'isTestingCredentials === true ?');
content = content.replace(/disabled=\{isTestingCredentials \|\| \!canTest\}/, 'disabled={isTestingCredentials === true || canTest === false}');
content = content.replace(/credentialsTestResult\.canManagePlugins === false && \(/, 'credentialsTestResult.canManagePlugins === false && (');
content = content.replace(/connectionLogs\.steps\.length > 0/g, 'connectionLogs.steps.length > NumberType.Zero');
content = content.replace(/selectedPluginIds\.includes\(plugin\.id\)/g, 'selectedPluginIds.includes(plugin.id) === true');
content = content.replace(/disabled=\{isSubmitting \|\| \!canSave\}/, 'disabled={isSubmitting === true || canSave === false}');
content = content.replace(/isSubmitting &&/g, 'isSubmitting === true &&');
content = content.replace(/value="basic"/g, 'value={TabType.Basic}');
content = content.replace(/value="connection"/g, 'value={TabType.Connection}');
content = content.replace(/value="plugins"/g, 'value={TabType.Plugins}');
content = content.replace(/REST API/, 'Rest Api');
content = content.replace(/Site URL/, 'Site Url');
content = content.replace(/handleFieldChange\("name"/g, 'handleFieldChange(AddSiteFieldType.Name');
content = content.replace(/handleFieldChange\("url"/g, 'handleFieldChange(AddSiteFieldType.Url');
content = content.replace(/handleFieldChange\("username"/g, 'handleFieldChange(AddSiteFieldType.Username');
content = content.replace(/handleFieldChange\("password"/g, 'handleFieldChange(AddSiteFieldType.Password');

fs.writeFileSync(file, content);
console.log('Done');
