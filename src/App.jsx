import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import StudentLogin from "./pages/StudentLogin.jsx";
import TeacherLogin from "./pages/TeacherLogin";
import AfterForm from "./forms/AfterForm.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/student" element={<StudentLogin />} />
            <Route path="/teacherlogin" element={<TeacherLogin />} />
            <Route path="/student/form" element={<AfterForm />} />
          </Routes>
          {/* <div>
            <h1> Temperature Check</h1>
          </div>
          <AfterForm /> */}
        </main>
      </Router>
    </>
  );
}

export default App;
