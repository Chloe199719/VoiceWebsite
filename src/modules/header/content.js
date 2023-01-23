import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { red } from "@mui/material/colors";

function Content() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const StyledPaper = styled(Paper)(`border-radius: 0;
  color: white;
  background: #272A31;
  `);
  const StyledMenuItem = styled(MenuItem)(
    ` 
      &:hover, &.Mui-focusVisible {
        background-color: darkBlue
      }`
  );
  const toggleOpen = function (e) {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = function (e) {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={toggleOpen}
      >
        Dashboard
      </div>
      <StyledPaper>
        <Menu
          sx={{
            "& .MuiMenu-paper": {
              backgroundColor: "lightblue",
            },
          }}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          // anchorOrigin={{
          //   vertical: "top",
          //   horizontal: "left",
          // }}
          // transformOrigin={{
          //   vertical: "top",
          //   horizontal: "left",
          // }}
        >
          <StyledMenuItem onClick={handleClose}>Profile</StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>My account</StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>Logout</StyledMenuItem>
        </Menu>
      </StyledPaper>
    </div>
  );
}

export default Content;
