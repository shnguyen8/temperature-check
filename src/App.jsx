import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import StudentLogin from "./pages/StudentLogin.jsx";
import TeacherLogin from "./pages/TeacherLogin";
import AfterForm from "./Forms/AfterForm";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route index element={<Home socket={socket} />} />
            <Route path="/student" element={<StudentLogin />} />
            <Route path="/teacherlogin" element={<TeacherLogin />} />
            <Route path="/student/form" element={<AfterForm />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
