import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import React, { useState } from "react";

function AvatarMenu({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const toggleOpen = function (e) {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = function (e) {
    setAnchorEl(null);
  };
  return (
    <ListItem>
      <ListItemButton
        id="avatarButton"
        aria-controls={open ? "avatarMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={toggleOpen}
      >
        <ListItemText>
          <Typography noWrap variant="h6">
            {data.name}
          </Typography>
        </ListItemText>
        <ListItemIcon sx={{ pl: 2 }}>
          <Avatar src={data.photoUrl} />
        </ListItemIcon>
      </ListItemButton>
      <Menu
        sx={{
          "& .MuiMenu-paper": {
            backgroundColor: "primary.light",
          },
        }}
        id="avatarMenu"
        aria-labelledby="avatarButton"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: 2,
          horizontal: "center",
        }}
      >
        {data.option.map((i) => {
          return <MenuItem key={i}>{i}</MenuItem>;
        })}
      </Menu>
    </ListItem>
  );
}

export default AvatarMenu;
