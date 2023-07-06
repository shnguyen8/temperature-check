import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function EmojiCards() {
  const emojis = ["😁", "🙂", "😐", "😟", "😰"];
  const emojiDescriptions = [
    "Great! I think I could explain the main ideas to a friend.",
    "Good. I understand most of what we learned today, but I still have a few questions.",
    "Okay. I have some questions, but I don't feel lost.",
    "Slightly Confused. I have many questions about what we learned today.",
    "Very confused! I think I need another explanation of some of the main ideas from today.",
  ];

  return (
    <>
      {emojis.map((value) => (
        <Card sx={{ maxWidth: 200, minHeight: 200 }}>
          <CardContent>
            <Typography sx={{ fontSize: 100 }}>{value}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default EmojiCards;
