import {
  Alert,
  Button,
  CircularProgress,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function SignIn() {
  const emailRef = useRef(); // Refrence Email Input
  const passwordRef = useRef(); //Refrence Password Input
  const passwordConfirmRef = useRef(); //Refrence Passoword Confirmation Input
  const Name = useRef(); // Refrence Name Input
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth(); // Context from Auth Provider
  let navigate = useNavigate();
  const handleSubmit = async function (e) {
    e.preventDefault();
    setError(``);
    setLoading(true);
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setLoading(false);
      return setError(`Passwords Dont Match`);
    }
    await signup(
      emailRef.current.value,
      passwordRef.current.value,
      Name.current.value
    )
      .then((e) => {
        navigate(`/`);
      })
      .catch((e) => {
        setError(`Error Creating Your Account`);
      })
      .finally((e) => {
        setLoading(false);
      });
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
          gap: 2,
        }}
      >
        <Typography variant="h2">Sign Up</Typography>
        {error ? (
          <Alert sx={{ width: "90%" }} severity="error">
            {error}
          </Alert>
        ) : null}
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
            <Button
              disabled={loading}
              type="submit"
              variant="contained"
              fullWidth={true}
            >
              Sign UP{" "}
              {loading ? (
                <CircularProgress
                  sx={{ ml: 2 }}
                  size="25px"
                  color="secondary"
                />
              ) : null}
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
