import {
  AppBar,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import Content from "./content";
import AvatarMenu from "./Avatar";
import { Link } from "react-router-dom";
import HeadsetIcon from "@mui/icons-material/Headset";

const resorces = {
  title: `Resorces`,
  dropDown: [`Some Stuff`, `Other Stuff`, `MoreStuff`],
};

const profile = {
  name: "Chloe Pratas",
  photoUrl:
    "https://lh3.googleusercontent.com/a/AEdFTp4pu57MCWzSiGkZK8tyXHnXKLvTlpgthcYZcS2Czg=s288-p-rw-no",
  option: [`Profile`, `Account`, `Dashboard`, `Logout`],
};
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p: 2 }}>
        <CssBaseline />
        <Toolbar sx={{ display: `flex`, justifyContent: "space-between" }}>
          <Link href="/">
            <Box sx={{ display: `flex`, alignItems: "center" }}>
              <HeadsetIcon
                fontSize="large"
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h2"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Rad Possum
              </Typography>
            </Box>
          </Link>
          <List sx={{ display: `flex` }}>
            <Content render={resorces} />
            <ListItem>
              <ListItemButton>
                <ListItemText>
                  <Typography variant="button">Booking</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText>
                  <Typography noWrap variant="button">
                    Contact Me
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <AvatarMenu data={profile} />
            {/* <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Inbox />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
              </ListItem> */}
          </List>
          {/* <Title /> */}
          {/* <NavBar /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
