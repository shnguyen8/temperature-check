import { useState, useEffect } from "react";
import EmojiCards from "../components/EmojiCards";
import { SubTitle } from "../components/styles/Home.styled.js";
import { io } from "socket.io-client";
import { Button, TextField, Box } from "@mui/material";
// import { room } from "./StudentLogin";

const socket = io.connect("http://localhost:4000");

const sendEmoji = () => {
  socket.emit("send", { message: "hello", room: "" });
};

function StudentDashboard() {
  return (
    <>
      <SubTitle>How do you feel after today's lesson?</SubTitle>
      <EmojiCards />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingTop: 8,
        }}
      >
        <Button
          variant="outlined"
          onClick={(e) => {
            sendEmoji();
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default StudentDashboard;
