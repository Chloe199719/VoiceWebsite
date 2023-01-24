import {
  Button,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { bgcolor, Box, Container } from "@mui/system";
import React from "react";
import vocieImg from "./voice.jpg";
const theme = createTheme({
  palette: {
    primary: {
      light: "#75a7ff",
      main: "#2979ff",
      dark: "#004ecb",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 5, p: 0 }}>
        <Grid
          container
          spacing={2}
          sx={{
            p: 8,
            borderRadius: 20,
            pl: 10,
            pr: 10,
          }}
        >
          <Grid xs={6} sx={{ pr: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <Typography variant="h1">
                Start Taking Control Of Your Voice Today
              </Typography>
              <Typography variant="subtitle1">
                {" "}
                You can sound however u want with a multitude of exercices and
                information
              </Typography>{" "}
              <Button variant="contained" size="large">
                <Typography variant="Button">Book a Lesson Now!</Typography>
              </Button>
            </Box>
          </Grid>
          <Grid xs={6}>
            <img
              className="imgHero"
              src={vocieImg}
              alt="voice"
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default LandingPage;