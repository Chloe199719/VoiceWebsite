import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { Component } from "react";
import "./App1.css";
import Header from "./modules/header/Header";
import Main from "./modules/Main";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./modules/main/landing/LandingPage";

const theme = createTheme({
  palette: {
    primary: {
      light: "#75a7ff",
      main: "#2979ff",
      dark: "#004ecb",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
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
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
