import { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import TeacherSignUp from "./TeacherSignUp";

function TeacherLogin() {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
    setSuccess(true);
  };

  return (
    <>
      <h1>Teacher Login</h1>
      {/* <div>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </div> */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        // noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outlined">Submit</Button>
      </Box>
      <TeacherSignUp />
    </>
  );
}

export default TeacherLogin;
