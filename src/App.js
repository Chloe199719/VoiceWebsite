import React, { Component } from "react";
import "./App.css";
import Header from "./modules/header/Header";
import Main from "./modules/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: [],
    };
  }
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
