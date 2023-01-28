import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";
import { ListItem, ListItemButton, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Content({ render }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const StyledPaper = styled(Paper)(`border-radius: 0;
  color: white;
  background: #272A31;
  `);
  const StyledMenuItem = styled(MenuItem)(
    ` 
      &:hover, &.Mui-focusVisible {
        background-color: blue
      }`
  );
  const toggleOpen = function (e) {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = function (e) {
    setAnchorEl(null);
  };

  return (
    <ListItem>
      <ListItemButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={toggleOpen}
      >
        <Typography variant="button">{render.title}</Typography>

        <ExpandMoreIcon sx={{ pl: 0.1 }} />
      </ListItemButton>

      <StyledPaper>
        <Menu
          sx={{
            "& .MuiMenu-paper": {
              backgroundColor: "primary.light",
            },
          }}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {render.dropDown.map((e) => {
            return (
              <StyledMenuItem key={e} onClick={handleClose}>
                {e}
              </StyledMenuItem>
            );
          })}
        </Menu>
      </StyledPaper>
    </ListItem>
  );
}

export default Content;
