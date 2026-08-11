import { useTheme, ThemeType, AccentColorType, SidebarThemeType, FontSizeType, BorderRadiusType } from "@/hooks/useTheme";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Moon, Sun, Palette, Type, Square, Zap, PanelLeft } from "lucide-react";

const themeOptions: { value: ThemeType; label: string; icon: React.ReactNode }[] = [
  { value: ThemeType.Light, label: "Light", icon: <Sun className="h-4 w-4" /> },
  { value: ThemeType.Dark, label: "Dark", icon: <Moon className="h-4 w-4" /> },
  { value: ThemeType.System, label: "System", icon: <Monitor className="h-4 w-4" /> },
  { value: ThemeType.HighContrast, label: "High Contrast", icon: <Sun className="h-4 w-4" /> },
  { value: ThemeType.HighContrastDark, label: "High Contrast Dark", icon: <Moon className="h-4 w-4" /> },
];

const accentColors: { value: AccentColorType; label: string; color: string }[] = [
  { value: AccentColorType.Blue, label: "Blue", color: "bg-blue-500" },
  { value: AccentColorType.Indigo, label: "Indigo", color: "bg-indigo-500" },
  { value: AccentColorType.Violet, label: "Violet", color: "bg-violet-500" },
  { value: AccentColorType.Purple, label: "Purple", color: "bg-purple-500" },
  { value: AccentColorType.Pink, label: "Pink", color: "bg-pink-500" },
  { value: AccentColorType.Rose, label: "Rose", color: "bg-rose-500" },
  { value: AccentColorType.Red, label: "Red", color: "bg-red-500" },
  { value: AccentColorType.Orange, label: "Orange", color: "bg-orange-500" },
  { value: AccentColorType.Amber, label: "Amber", color: "bg-amber-500" },
  { value: AccentColorType.Yellow, label: "Yellow", color: "bg-yellow-500" },
  { value: AccentColorType.Lime, label: "Lime", color: "bg-lime-500" },
  { value: AccentColorType.Green, label: "Green", color: "bg-green-500" },
  { value: AccentColorType.Emerald, label: "Emerald", color: "bg-emerald-500" },
  { value: AccentColorType.Teal, label: "Teal", color: "bg-teal-500" },
  { value: AccentColorType.Cyan, label: "Cyan", color: "bg-cyan-500" },
  { value: AccentColorType.Sky, label: "Sky", color: "bg-sky-500" },
];

const sidebarThemes: { value: SidebarThemeType; label: string; preview: string }[] = [
  { value: SidebarThemeType.NightBlue, label: "Night Blue", preview: "bg-[#0B1220] border-blue-500" },
  { value: SidebarThemeType.MidnightPurple, label: "Midnight Purple", preview: "bg-[#120A1F] border-purple-500" },
  { value: SidebarThemeType.EmeraldDark, label: "Emerald Dark", preview: "bg-[#04140E] border-emerald-500" },
  { value: SidebarThemeType.SolarWhite, label: "Solar White", preview: "bg-white border-orange-400" },
];

export function ThemeSelector() {
  const {
    theme,
    accentColor,
    sidebarTheme,
    fontSize,
    borderRadius,
    compactMode,
    animationsEnabled,
    setTheme,
    setAccentColor,
    setSidebarTheme,
    setFontSize,
    setBorderRadius,
    setCompactMode,
    setAnimationsEnabled,
    isSaving,
  } = useTheme();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Appearance
        </CardTitle>
        <CardDescription>
          Customize the look and feel of the application
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Theme Selection */}
        <div className="space-y-2">
          <Label htmlFor="theme">Theme</Label>
          <Select value={theme} onValueChange={(v) => setTheme(v as ThemeType)}>
            <SelectTrigger id="theme" className="w-full">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              {themeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    {option.icon}
                    {option.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Accent Color */}
        <div className="space-y-2">
          <Label>Accent Color</Label>
          <div className="grid grid-cols-8 gap-2">
            {accentColors.map((color) => (
              <button
                key={color.value}
                onClick={() => setAccentColor(color.value)}
                className={`h-8 w-8 rounded-full ${color.color} transition-colors ring-offset-background ${
                  accentColor === color.value
                    ? "ring-2 ring-offset-2 ring-offset-background ring-primary"
                    : ""
                }`}
                title={color.label}
                disabled={isSaving}
              />
            ))}
          </div>
        </div>

        {/* Sidebar Theme */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <PanelLeft className="h-4 w-4" />
            Sidebar Theme
          </Label>
          <div className="grid grid-cols-2 gap-2">
            {sidebarThemes.map((st) => (
              <button
                key={st.value}
                onClick={() => setSidebarTheme(st.value)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border transition-colors text-left ${
                  sidebarTheme === st.value
                    ? "ring-2 ring-primary border-primary"
                    : "border-border hover:border-muted-foreground/40"
                }`}
                disabled={isSaving}
              >
                <div className={`h-6 w-3 rounded-sm border-l-[3px] ${st.preview}`} />
                <span className="text-xs font-medium">{st.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fontSize" className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            Font Size
          </Label>
          <Select value={fontSize} onValueChange={(v) => setFontSize(v as FontSizeType)}>
            <SelectTrigger id="fontSize">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={FontSizeType.XSmall}>Extra Small</SelectItem>
              <SelectItem value={FontSizeType.Small}>Small</SelectItem>
              <SelectItem value={FontSizeType.Medium}>Medium</SelectItem>
              <SelectItem value={FontSizeType.Large}>Large</SelectItem>
              <SelectItem value={FontSizeType.XLarge}>Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Border Radius */}
        <div className="space-y-2">
          <Label htmlFor="borderRadius" className="flex items-center gap-2">
            <Square className="h-4 w-4" />
            Border Radius
          </Label>
          <Select value={borderRadius} onValueChange={(v) => setBorderRadius(v as BorderRadiusType)}>
            <SelectTrigger id="borderRadius">
              <SelectValue placeholder="Select radius" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={BorderRadiusType.None}>None (Sharp)</SelectItem>
              <SelectItem value={BorderRadiusType.Small}>Small</SelectItem>
              <SelectItem value={BorderRadiusType.Medium}>Medium</SelectItem>
              <SelectItem value={BorderRadiusType.Large}>Large</SelectItem>
              <SelectItem value={BorderRadiusType.Full}>Full (Pill)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Toggles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="compactMode">Compact Mode</Label>
              <p className="text-sm text-muted-foreground">
                Reduce padding and spacing throughout the UI
              </p>
            </div>
            <Switch
              id="compactMode"
              checked={compactMode}
              onCheckedChange={setCompactMode}
              disabled={isSaving}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="animations" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Animations
              </Label>
              <p className="text-sm text-muted-foreground">
                Enable smooth transitions and animations
              </p>
            </div>
            <Switch
              id="animations"
              checked={animationsEnabled}
              onCheckedChange={setAnimationsEnabled}
              disabled={isSaving}
            />
          </div>
        </div>

        {isSaving && (
          <p className="text-sm text-muted-foreground animate-pulse">
            Saving changes...
          </p>
        )}
      </CardContent>
    </Card>
  );
}
