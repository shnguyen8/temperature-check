import { useState } from "react";
import "./App.css";
import AfterForm from "./Forms/AfterForm.jsx";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1> Temperature Check</h1>
      </div>
      <AfterForm />
    </>
  );
}

export default App;
