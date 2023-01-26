import { Box, Container, List, Typography } from "@mui/material";

import React from "react";

import FaqItem from "./FaqItem";

function Faq() {
  const tempObjFaq = [
    {
      id: 1,
      Q: "Test 123 123 123 123123",
      A: "Test 321 321 3213 32131",
    },
    {
      id: 2,
      Q: "Test 123 123 121231233 123123",
      A: "Test 321 321 32q12313 32131",
    },
    {
      id: 3,
      Q: "Test 123 123 123 1asdasd3123",
      A: "Test 321 321 3213 32131",
    },
    {
      id: 4,
      Q: "Test 123 123 1asdasd23 123123",
      A: "Test 321 321 3213 32131",
    },
  ];

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Typography variant="h2">Frequently Asked Questions</Typography>
        {/* <Divider sx={{ mt: 2, width: "100%" }} /> */}
      </Box>

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 6,
          width: "100%",
        }}
      >
        {/* <Divider sx={{ width: "100%" }} />
        <ListItemButton onClick={handleClick} sx={{ width: "100%" }}>
          <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
          <ListItemText primary="Test" />{" "}
        </ListItemButton>
        <Collapse
          sx={{ width: "100%", p: 1 }}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <Typography>Test </Typography>
        </Collapse>
        <Divider sx={{ width: "100%" }} />
        <ListItemButton onClick={handleClick} sx={{ width: "100%" }}>
          <ListItemIcon>
            <ExpandMoreIcon />
          </ListItemIcon>
          <ListItemText primary="Test" />{" "}
        </ListItemButton>
        <Collapse
          sx={{ width: "100%", p: 1 }}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <Typography>Test </Typography>
        </Collapse> */}
        {tempObjFaq.map((a) => {
          return <FaqItem key={a.id} content={a} />;
        })}
      </List>
    </Container>
  );
}

export default Faq;
