import { CssBaseline } from "@mui/material";
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: [],
    };
  }
  render() {
    return (
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
