import {
  Collapse,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function FaqItem({ content }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Divider sx={{ width: "95%" }} />
      <ListItem
        disablePadding
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <ListItemButton onClick={handleClick} sx={{ width: "95%", m: 0 }}>
          <ListItemText primary={content.question} />{" "}
          <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        </ListItemButton>
        <Collapse
          sx={{ width: "95%", p: 1, pl: 2, backgroundColor: "secondary.light" }}
          in={open}
          timeout="auto"
          unmountOnExit
          onClick={handleClick}
        >
          <Typography>{content.awnser}</Typography>
        </Collapse>
      </ListItem>
    </>
  );
}

export default FaqItem;
