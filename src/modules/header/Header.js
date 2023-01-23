import React from "react";
import NavBar from "./NavBar";
import Title from "./title";

export default function Header(props) {
  return (
    <header>
      <Title />
      <NavBar />
    </header>
  );
}
