import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function AfterForm() {
  return (
    <>
      <h2>How do you feel after today's lesson?</h2>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Select an emoji below:
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="great"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="great"
            control={<Radio />}
            label="😁 - Great! I think I could explain the main ideas to a friend."
          />
          <FormControlLabel
            value="good"
            control={<Radio />}
            label="🙂 - Good. I understand most of what we learned today, but I still have a few questions."
          />
          <FormControlLabel
            value="okay"
            control={<Radio />}
            label="😐 - Okay. I have some questions, but I don't feel lost. "
          />
          <FormControlLabel
            value="confused"
            control={<Radio />}
            label="😟 - Slightly Confused. I have many questions about what we learned today."
          />
          <FormControlLabel
            value="lost"
            control={<Radio />}
            label="😰 - Very confused! I think I need another explanation of some of the main ideas from today."
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default AfterForm;
