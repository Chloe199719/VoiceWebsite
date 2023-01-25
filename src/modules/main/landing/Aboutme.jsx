import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

function Aboutme() {
  return (
    <Container>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h2">About Me</Typography>
      </Box>
    </Container>
  );
}

export default Aboutme;
