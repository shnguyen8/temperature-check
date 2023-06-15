import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function StudentLogin() {
  const [name, setName] = useState("");
  const [classCode, setClassCode] = useState("");

  // const handleNameInput = (name) => {
  //   if (name.length )
  // }

  return (
    <>
      <h1>Student Login</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          helperText="Enter the class code given by your teacher!"
          label="Class Code"
          variant="outlined"
        />
        <Link to="/student/form">
          <Button variant="outlined">Submit</Button>
        </Link>
      </Box>
    </>
  );
}

export default StudentLogin;
