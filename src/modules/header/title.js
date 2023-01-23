import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

export default function Title() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = function () {
    setIsOpen(!isOpen);
  };

  const Content = function () {
    return (
      <Box sx={{ width: 400 }}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>{" "}
              Test
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>{" "}
              Test
            </ListItemButton>
          </ListItem>
          {/* <Button>1</Button>
          <Button>2</Button>
          <Button>2</Button>
          <Button>3</Button> */}
        </List>
      </Box>
    );
  };

  return (
    <div className="head">
      <Drawer anchor="top" open={isOpen} onClick={toggleDrawer}>
        {" "}
        <Content />{" "}
      </Drawer>
      <MenuIcon onClick={toggleDrawer} fontSize="large" />
      <h1>Rad Possum</h1>
    </div>
  );
}
