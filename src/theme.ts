import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  // "class" puts a light/dark class on <html>, so the mode can be switched manually
  cssVariables: { colorSchemeSelector: "class" },
});
