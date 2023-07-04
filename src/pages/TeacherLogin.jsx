import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TeacherSignUp from "./TeacherSignUp";

function TeacherLogin() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const users = [{ username: "Nguyen", password: "test" }];

  // const handleUsernameInput = (username) => {

  return (
    <>
      <h1>Teacher Login</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button variant="outlined">Submit</Button>
      </Box>
      <TeacherSignUp />
    </>
  );
}

export default TeacherLogin;
