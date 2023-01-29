import {
  Alert,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function ContactMe() {
  const [error, setError] = useState(``);
  const [sucess, setSucess] = useState(``);
  const [loading, setLoading] = useState(false);
  const { messageLoader } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const discIDRef = useRef();
  const messageRef = useRef();
  const sheRef = useRef();
  const heRef = useRef();
  const theyRef = useRef();
  const other = useRef();
  const otherinputRef = useRef();

  const handleSubmit = async function (e) {
    e.preventDefault();
    setLoading(true);
    setError(``);
    setSucess(``);

    if (!emailRef.current.value && !discIDRef.current.value) {
      setError(`Please Provide an Email Or DiscID so i can reply back`);
      setLoading(false);
      return;
    }
    if (!messageRef.current.value) {
      setError(`Please provide a message`);
      setLoading(false);
      return;
    }

    await messageLoader(
      nameRef.current.value,
      emailRef.current.value,
      discIDRef.current.value,
      checkPronouns(),
      messageRef.current.value
    )
      .then((e) => {
        setSucess("Message Sent I will get back to as soon as possible");
      })
      .catch((e) => {
        setError(`There was Error Sending Your info to Our Server`);
      })
      .finally((e) => {
        setLoading(false);
      });
  };
  const checkPronouns = function () {
    let pronouns = "";
    if (sheRef.current.checked) {
      pronouns = pronouns + "She/Her";
    }
    if (heRef.current.checked) {
      if (pronouns) {
        pronouns = pronouns + " / He/Him";
      } else {
        pronouns = pronouns + "He/Him";
      }
    }
    if (theyRef.current.checked) {
      if (pronouns) {
        pronouns = pronouns + " / They/Them";
      } else {
        pronouns = pronouns + "They/Them";
      }
    }
    if (other.current.checked) {
      if (pronouns) {
        pronouns = pronouns + ` / ${otherinputRef.current.value}`;
      } else {
        pronouns = pronouns + `${otherinputRef.current.value} `;
      }
    }
    return pronouns;
  };
  return (
    <Container
      sx={{
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Box>
        <Typography variant="h2">Contact Me</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: 3,
          borderColor: "primary.main",
          flexDirection: "column",
          borderRadius: "16px",
          maxWidth: "800px",
          width: "90%",
          p: 10,
          gap: 2,
        }}
      >
        <Typography variant="h6">
          You Can Contact me on Discord @Sweet_timbre #0839 or fill the form
          bellow
        </Typography>
        <form onSubmit={handleSubmit} className="contact-me">
          <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              size="medium"
              inputRef={nameRef}
            />{" "}
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              size="medium"
              inputRef={emailRef}
            />{" "}
            <TextField
              label="Discord ID"
              type="text"
              inputRef={discIDRef}
              variant="outlined"
              size="medium"
            />
          </Box>
          <FormControl sx={{ display: "flex", flexDirection: "row" }}>
            {/* <FormLabel id="demo-row-radio-buttons-group-label">
              Pronouns?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="She/Her"
                control={<Radio />}
                label="She/Her"
              />
              <FormControlLabel
                value="He/Him"
                control={<Radio />}
                label="He/Him"
              />
              <FormControlLabel
                value="They/Them"
                control={<Radio />}
                label="They/Them"
              />
              <FormControlLabel
                value="disabled"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup> */}
            <FormControlLabel
              control={<Checkbox inputRef={sheRef} />}
              label="She/Her"
            />
            <FormControlLabel
              control={<Checkbox inputRef={heRef} />}
              label="He/Him"
            />
            <FormControlLabel
              control={<Checkbox inputRef={theyRef} />}
              label="They/Them"
            />{" "}
            <FormControlLabel
              control={<Checkbox inputRef={other} />}
              label="Other"
            />
            <TextField
              label="Other"
              type="text"
              variant="outlined"
              size="medium"
              inputRef={otherinputRef}
            />
          </FormControl>
          <TextField
            label="Message"
            type="text"
            variant="outlined"
            size="medium"
            inputRef={messageRef}
            fullWidth={true}
            multiline
          />
          {error ? (
            <Alert sx={{ width: "100%" }} severity="error">
              {error}
            </Alert>
          ) : null}
          {sucess ? (
            <Alert sx={{ width: "100%" }} severity="success">
              {sucess}
            </Alert>
          ) : null}
          <Button
            type="submit"
            disabled={loading}
            variant="contained"
            fullWidth={true}
          >
            Submit{" "}
            {loading ? (
              <CircularProgress sx={{ ml: 2 }} size="25px" color="secondary" />
            ) : null}
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default ContactMe;
