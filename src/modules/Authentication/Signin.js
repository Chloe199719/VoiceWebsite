import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async function (e) {
    setError(``);
    setLoading(true);
    e.preventDefault();
    await signin(emailRef.current.value, passwordRef.current.value)
      .then((e) => {
        // Change This To DashBoard in Future
        navigate(`/`);
      })
      .catch((e) => {
        console.log(e);
        setError(`Wrong PassWord Or Email`);
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
      {/* {currentUser ? <Navigate to="/" replace={true} /> : null} */}
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
        <Typography variant="h2">Sign In</Typography>

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
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              inputRef={emailRef}
              size="medium"
              fullWidth={true}
              required
            />
            <TextField
              label="Password"
              type="password"
              inputRef={passwordRef}
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
              Sign IN{" "}
              {loading ? (
                <CircularProgress
                  sx={{ ml: 2 }}
                  size="25px"
                  color="secondary"
                />
              ) : null}
            </Button>
            <Button variant="contained" fullWidth={true}>
              Forgot Your Password?
            </Button>
          </FormControl>
        </form>
        <Typography sx={{ mt: 2 }}>
          Dont have an Account yet?
          <Link className="atext" to="/signup">
            SignUp
          </Link>{" "}
        </Typography>
      </Box>
    </Container>
  );
}

export default Signup;
