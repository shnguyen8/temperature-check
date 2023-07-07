import { useState } from "react";
import Button from "@mui/material/Button";
import { SubTitle } from "../components/styles/Home.styled";

function TeacherDashboard() {
  const [authenticated, setAuthenticated] = useState(null);

  // useEffect(() => {});

  return (
    <>
      <SubTitle> Welcome, ! </SubTitle>
    </>
  );
}

export default TeacherDashboard;
