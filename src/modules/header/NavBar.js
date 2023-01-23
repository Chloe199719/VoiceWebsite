import React from "react";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
function NavBar(props) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About me</li>
        <li>
          <Button>Resources</Button>
        </li>
        <li>Booking</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
