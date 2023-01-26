import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import JanaImg from "./jana.jpg";

function Aboutme() {
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
        <Typography variant="h2">About Me</Typography>
        <Divider sx={{ mt: 2 }} />
        <Container sx={{ mt: 5 }}>
          <Grid container spacing={0}>
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
                p: 2,
              }}
            >
              {" "}
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse risus arcu, pulvinar laoreet mauris ac, auctor
                eleifend purus. Maecenas ac erat pellentesque, dictum lectus in,
                porta nibh. Fusce laoreet risus eget libero porttitor, vel
                iaculis mi bibendum. Nulla congue lacus non bibendum venenatis.
                Nunc
              </Typography>
              <Typography variant="body1">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Vestibulum est ante, sodales sit amet
                erat a, vehicula porta tellus. Suspendisse varius leo ut orci
                pharetra porttitor. Aenean consequat a magna ut tincidunt.
                Aliquam ut velit eget enim suscipit consectetur vitae a libero.
                Vivamus euismod, lacus non efficitur laoreet, dui justo congue
                nisl, vitae faucibus urna purus a metus. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Cras ac diam nibh.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img
                className="imgHero"
                src={JanaImg}
                alt="jana"
                width="100%"
              ></img>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}

export default Aboutme;
