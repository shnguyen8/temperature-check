import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { SubTitle } from "../components/styles/Home.styled";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function TeacherDashboard() {
  const [authenticated, setAuthenticated] = useState(null);
  const [classCode, setClassCode] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket]);

  const generateClassCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    setClassCode(result);
  };

  return (
    <Box>
      <SubTitle> Welcome, ! </SubTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button variant="outlined" onClick={generateClassCode}>
          GENERATE CLASS CODE
        </Button>
      </Box>
      <Box>
        <SubTitle>{classCode}</SubTitle>
      </Box>
    </Box>
  );
}

export default TeacherDashboard;
