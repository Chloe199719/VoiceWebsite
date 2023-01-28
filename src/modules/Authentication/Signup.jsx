import {
  Button,
  Container,
  Divider,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function SignIn() {
  const emailRef = useRef(); // Refrence Email Input
  const passwordRef = useRef(); //Refrence Password Input
  const passwordConfirmRef = useRef(); //Refrence Passoword Confirmation Input
  const Name = useRef(); // Refrence Name Input

  const { signup } = useAuth(); // Context from Auth Provider
  const handleSubmit = async function (e) {
    e.preventDefault();
    await signup(
      emailRef.current.value,
      passwordRef.current.value,
      Name.current.value
    );
  };
  return (
    <Container
      sx={{
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: 3,
          borderColor: "primary.main",
          flexDirection: "column",
          borderRadius: "16px",
          maxWidth: "600px",
          width: "90%",
          p: 10,
        }}
      >
        <Typography variant="h2">Sign Up</Typography>
        <Divider sx={{ mb: 2, mt: 3 }} />
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
              width: "90%",
            }}
          >
            {/* <InputLabel>Email</InputLabel>
          <Input></Input> */}
            <TextField
              label="Name"
              type="text"
              inputRef={Name}
              variant="outlined"
              size="medium"
              fullWidth={true}
              required
            />
            <TextField
              label="Email"
              type="email"
              inputRef={emailRef}
              variant="outlined"
              size="medium"
              fullWidth={true}
              required
            />{" "}
            <TextField
              label="Password"
              type="password"
              inputRef={passwordRef}
              variant="outlined"
              size="medium"
              fullWidth={true}
              required
            />
            <TextField
              label="Repeat Password"
              type="password"
              inputRef={passwordConfirmRef}
              variant="outlined"
              size="medium"
              fullWidth={true}
              required
            />
            <Button type="submit" variant="contained" fullWidth={true}>
              Sign UP
            </Button>
          </FormControl>
        </form>
        <Typography sx={{ mt: 2 }}>
          Do You Already Haven an Account?
          <Link className="atext" to="/signin">
            SignIn
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default SignIn;
