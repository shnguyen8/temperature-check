import { useState } from "react";
import TeacherSideNav from "../components/TeacherSideNav";
import Button from "@mui/material/Button";

function TeacherDashboard() {
  const [authenticated, setAuthenticated] = useState(null);

  // useEffect(() => {});

  return (
    <>
      <h1> Welcome, ! </h1>
      <div>{/* <TeacherSideNav /> */}</div>
    </>
  );
}

export default TeacherDashboard;
