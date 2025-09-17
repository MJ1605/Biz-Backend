import { createTheme } from "@mui/material";


//theme for the whole webpage to use
export const darktheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9"},
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "1rem",
          backgroundColor: "#212121",
          padding: "1rem",
        },
      },
    },
  },
});