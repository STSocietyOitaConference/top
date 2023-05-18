import React from "react";
import "./css/App.css";
import Main from "./Main";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#fcfaea",
      },
      primary: {
        main: "#e86000",
      },
      secondary: {
        main: "#6f5b41",
      },
      text: { primary: "#e86000" },
    },
    typography: {
      fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
    },
  });
  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
  };
  theme.typography.h4 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };
  theme.typography.h6 = {
    fontSize: "1rem",
    "@media (min-width:600px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
