import IconButton from "@mui/material/IconButton";
import Brightness4 from "@mui/icons-material/Brightness4";
import Brightness7 from "@mui/icons-material/Brightness7";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();

  // mode is undefined until the color scheme is read on mount
  if (!mode) {
    return null;
  }

  const resolvedMode = mode === "system" ? systemMode : mode;
  const isDark = resolvedMode === "dark";

  return (
    <IconButton
      aria-label="toggle dark mode"
      onClick={() => setMode(isDark ? "light" : "dark")}
      color="inherit"
      size="large"
    >
      {isDark ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
