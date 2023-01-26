import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import "./App1.css";
import Header from "./modules/header/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./modules/main/landing";

const theme = createTheme({
  palette: {
    primary: {
      light: "#75a7ff",
      main: "#2979ff",
      dark: "#004ecb",
      contrastText: "#fff",
    },
    secondary: {
      light: "#cfcfcf",
      main: "#9e9e9e",
      dark: "#707070",
      contrastText: "#000",
    },
  },
});
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
