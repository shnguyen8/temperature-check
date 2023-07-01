import { useState } from "react";
import TeacherSideNav from "../components/TeacherSideNav";

function TeacherDashboard() {
  return (
    <>
      <h1> Welcome! </h1>
      <div>
        <TeacherSideNav />
      </div>
    </>
  );
}

export default TeacherDashboard;
