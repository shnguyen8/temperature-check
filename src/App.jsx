import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "././components/styles/App.styled.js";
import Home from "./pages/Home.jsx";
import StudentLogin from "./pages/StudentLogin.jsx";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherSignUp from "./pages/TeacherSignUp";
import TeacherDashboard from "./pages/TeacherDashboard";
import AfterForm from "./Forms/AfterForm";
import { io } from "socket.io-client";
import { Global } from "@emotion/react";

const socket = io.connect("http://localhost:4000");

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <main>
          <Routes>
            <Route index element={<Home socket={socket} />} />
            <Route path="/student" element={<StudentLogin />} />
            <Route path="/teacher" element={<TeacherLogin />} />
            <Route path="/student/form" element={<AfterForm />} />
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
