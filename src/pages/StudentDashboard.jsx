import { useState } from "react";

import EmojiCards from "../components/EmojiCards";
import { SubTitle } from "../components/styles/Home.styled.js";

function StudentDashboard() {
  return (
    <>
      <SubTitle>How do you feel after today's lesson?</SubTitle>
      <EmojiCards />
    </>
  );
}

export default StudentDashboard;
