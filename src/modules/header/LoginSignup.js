import { ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function LoginSignup() {
  return (
    <ListItem>
      <Link to="/signin">
        <ListItemButton>
          <Typography noWrap variant="button">
            Login
          </Typography>
        </ListItemButton>
      </Link>
      <Link to="/signup">
        {" "}
        <ListItemButton>
          <Typography noWrap variant="button">
            SignUp
          </Typography>
        </ListItemButton>
      </Link>
    </ListItem>
  );
}

export default LoginSignup;
