import { useCallback, useEffect, useState } from "react";
import { useSettings } from "./useSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, requireSuccess } from "@/lib/api";

export enum ThemeType {
  Light = "light",
  Dark = "dark",
  System = "system",
  HighContrast = "high-contrast",
  HighContrastDark = "high-contrast-dark",
}

export enum AccentColorType {
  Blue = "blue",
  Indigo = "indigo",
  Violet = "violet",
  Purple = "purple",
  Pink = "pink",
  Rose = "rose",
  Red = "red",
  Orange = "orange",
  Amber = "amber",
  Yellow = "yellow",
  Lime = "lime",
  Green = "green",
  Emerald = "emerald",
  Teal = "teal",
  Cyan = "cyan",
  Sky = "sky",
}

export enum FontSizeType {
  XSmall = "x-small",
  Small = "small",
  Medium = "medium",
  Large = "large",
  XLarge = "x-large",
}

export enum BorderRadiusType {
  None = "none",
  Small = "small",
  Medium = "medium",
  Large = "large",
  Full = "full",
}

export enum SidebarThemeType {
  NightBlue = "night-blue",
  MidnightPurple = "midnight-purple",
  EmeraldDark = "emerald-dark",
  SolarWhite = "solar-white",
}

export interface ThemeConfig {
  theme: ThemeType;
  accentColor: AccentColorType;
  fontSize: FontSizeType;
  borderRadius: BorderRadiusType;
  compactMode: boolean;
  animationsEnabled: boolean;
  sidebarTheme: SidebarThemeType;
}

const defaultThemeConfig: ThemeConfig = {
  theme: ThemeType.System,
  accentColor: AccentColorType.Green,
  fontSize: FontSizeType.Medium,
  borderRadius: BorderRadiusType.Medium,
  compactMode: false,
  animationsEnabled: true,
  sidebarTheme: SidebarThemeType.NightBlue,
};

// Get system preference for dark mode
function getSystemTheme(): ThemeType.Light | ThemeType.Dark {
  if (typeof window === "undefined") return ThemeType.Light;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ThemeType.Dark
    : ThemeType.Light;
}

// Resolve theme including system preference
function resolveTheme(theme: ThemeType): ThemeType.Light | ThemeType.Dark | ThemeType.HighContrast | ThemeType.HighContrastDark {
  if (theme === ThemeType.System) {
    return getSystemTheme();
  }

  return theme;
}

export function useTheme() {
  const { data: settings, isLoading } = useSettings();
  const queryClient = useQueryClient();

  // Local state for immediate UI updates
  const [localConfig, setLocalConfig] = useState<ThemeConfig>(defaultThemeConfig);

  // Initialize from settings when loaded
  useEffect(() => {
    if (settings?.appearance) {
      const appearance = settings.appearance;
      setLocalConfig({
        theme: (appearance.theme as ThemeType) || defaultThemeConfig.theme,
        accentColor: (appearance.accentColor as AccentColorType) || defaultThemeConfig.accentColor,
        fontSize: (appearance.fontSize as FontSizeType) || defaultThemeConfig.fontSize,
        borderRadius: (appearance.borderRadius as BorderRadiusType) || defaultThemeConfig.borderRadius,
        compactMode: appearance.compactMode ?? defaultThemeConfig.compactMode,
        animationsEnabled: appearance.animationsEnabled ?? defaultThemeConfig.animationsEnabled,
        sidebarTheme: (appearance.sidebarTheme as SidebarThemeType) || defaultThemeConfig.sidebarTheme,
      });
    }
  }, [settings]);

  // Apply theme to document
  useEffect(() => {
    const resolved = resolveTheme(localConfig.theme);
    const root = document.documentElement;

    // Remove all theme classes
    root.classList.remove("light", "dark", "high-contrast", "high-contrast-dark");
    
    // Add resolved theme class
    root.classList.add(resolved);
    
    // Set data attributes for CSS targeting
    root.setAttribute("data-theme", localConfig.theme);
    root.setAttribute("data-accent", localConfig.accentColor);
    root.setAttribute("data-font-size", localConfig.fontSize);
    root.setAttribute("data-radius", localConfig.borderRadius);
    root.setAttribute("data-sidebar-theme", localConfig.sidebarTheme);
    if (localConfig.compactMode) {
      root.setAttribute("data-compact", "true");
    } else {
      root.removeAttribute("data-compact");
    }

    if (!localConfig.animationsEnabled) {
      root.setAttribute("data-reduce-motion", "true");
    } else {
      root.removeAttribute("data-reduce-motion");
    }
  }, [localConfig]);

  // Listen for system theme changes
  useEffect(() => {
    if (localConfig.theme !== ThemeType.System) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const resolved = getSystemTheme();
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(resolved);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [localConfig.theme]);

  // Mutation for saving theme settings
  const updateSettingMutation = useMutation({
    mutationFn: async ({ key, value }: { key: string; value: string }) => {
      const response = await api.updateSetting(key, value);
      // Ensure errors surface in the GlobalErrorModal with the full resolved URL.
      return requireSuccess(response, {
        endpoint: `/settings/${encodeURIComponent(key)}`,
        method: "PUT",
        requestBody: { value },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
  });

  const setTheme = useCallback((theme: ThemeType) => {
    setLocalConfig((prev) => ({ ...prev, theme }));
    updateSettingMutation.mutate({ key: "appearance.theme", value: theme });
  }, [updateSettingMutation]);

  const setAccentColor = useCallback((accentColor: AccentColorType) => {
    setLocalConfig((prev) => ({ ...prev, accentColor }));
    updateSettingMutation.mutate({ key: "appearance.accentColor", value: accentColor });
  }, [updateSettingMutation]);

  const setFontSize = useCallback((fontSize: FontSizeType) => {
    setLocalConfig((prev) => ({ ...prev, fontSize }));
    updateSettingMutation.mutate({ key: "appearance.fontSize", value: fontSize });
  }, [updateSettingMutation]);

  const setBorderRadius = useCallback((borderRadius: BorderRadiusType) => {
    setLocalConfig((prev) => ({ ...prev, borderRadius }));
    updateSettingMutation.mutate({ key: "appearance.borderRadius", value: borderRadius });
  }, [updateSettingMutation]);

  const setCompactMode = useCallback((compactMode: boolean) => {
    setLocalConfig((prev) => ({ ...prev, compactMode }));
    updateSettingMutation.mutate({ key: "appearance.compactMode", value: String(compactMode) });
  }, [updateSettingMutation]);

  const setAnimationsEnabled = useCallback((animationsEnabled: boolean) => {
    setLocalConfig((prev) => ({ ...prev, animationsEnabled }));
    updateSettingMutation.mutate({ key: "appearance.animationsEnabled", value: String(animationsEnabled) });
  }, [updateSettingMutation]);

  const setSidebarTheme = useCallback((sidebarTheme: SidebarThemeType) => {
    setLocalConfig((prev) => ({ ...prev, sidebarTheme }));
    updateSettingMutation.mutate({ key: "appearance.sidebarTheme", value: sidebarTheme });
  }, [updateSettingMutation]);

  return {
    // Current config
    ...localConfig,
    resolvedTheme: resolveTheme(localConfig.theme),
    isLoading,
    isSaving: updateSettingMutation.isPending,

    // Setters
    setTheme,
    setAccentColor,
    setFontSize,
    setBorderRadius,
    setCompactMode,
    setAnimationsEnabled,
    setSidebarTheme,
  };
}
