import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import EmojiCards from "../components/EmojiCards";
import { SubTitle } from "../components/styles/Home.styled.js";

function AfterForm() {
  return (
    <>
      <SubTitle>How do you feel after today's lesson?</SubTitle>
      <EmojiCards />
    </>
  );
}

export default AfterForm;
