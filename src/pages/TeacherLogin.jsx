import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TeacherLogin() {
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
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </Box>
    </>
  );
}

export default TeacherLogin;