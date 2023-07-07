import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { SubTitle } from "../components/styles/Home.styled";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function TeacherDashboard() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket]);

  return (
    <>
      <SubTitle> Welcome, ! </SubTitle>
    </>
  );
}

export default TeacherDashboard;
