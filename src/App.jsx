import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AfterForm from "./Forms/AfterForm.jsx";
import Home from "./Home.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="student" element={<StudentLogin />} /> */}
          </Routes>
          {/* <div>
            <h1> Temperature Check</h1>
          </div>
          <AfterForm /> */}
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
