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
import { useAuth } from "../../contexts/AuthContext";

function AvatarMenu({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const toggleOpen = function (e) {
    setAnchorEl(e.currentTarget);
  };
  const { signoutuser, currentUser } = useAuth();
  const handleClose = function (e) {
    setAnchorEl(null);
  };
  const logout = function () {
    signoutuser();
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
            {currentUser ? currentUser.displayName : data.name}
          </Typography>
        </ListItemText>
        <ListItemIcon sx={{ pl: 2 }}>
          <Avatar src={currentUser.photoUrl} referrerPolicy="no-referrer" />
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
          if (i === `Logout`) {
            return (
              <MenuItem onClick={logout} key={i}>
                {i}
              </MenuItem>
            );
          }
          return <MenuItem key={i}>{i}</MenuItem>;
        })}
      </Menu>
    </ListItem>
  );
}

export default AvatarMenu;
