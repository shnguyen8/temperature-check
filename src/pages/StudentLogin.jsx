import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Title, SubTitle, LoginDiv } from "../components/styles/Home.styled.js";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function StudentLogin() {
  const [studentName, setStudentName] = useState("");
  const [room, setRoom] = useState("");

  // const navigate = () => {
  //   if (room === "123456") {
  //     useNavigate();
  //   } else {
  //     alert("ROOM DOES NOT EXIST");
  //   }
  // };

  // function handleNavigate() {
  //   navigate("/student/dashboard");
  // }

  const joinRoom = () => {
    if (studentName !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <>
      <SubTitle>Student Login</SubTitle>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          helperText="Enter the class code given by your teacher!"
          label="Class Code"
          variant="outlined"
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/student/dashboard">
          <Button variant="outlined" onClick={joinRoom}>
            Submit
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default StudentLogin;
