import React from "react";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Content from "./content";
function NavBar(props) {
  return (
    <nav>
      <ul>
        <li>
          <Content />
        </li>
        <li>Booking</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
