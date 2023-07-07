import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import {
  ImageDescription,
  ImageDescriptionLayer,
  ImageWrap,
} from "./styles/EmojiCards.styled";

function EmojiCards() {
  const emojis = ["😁", "🙂", "😐", "😟", "😰"];
  const emojiDescriptions = [
    "Great! I think I could explain the main ideas to a friend.",
    "Good. I understand most of what we learned today, but I still have a few questions.",
    "Okay. I have some questions, but I don't feel lost.",
    "Slightly Confused. I have many questions about what we learned today.",
    "Very confused! I think I need another explanation of some of the main ideas from today.",
  ];

  const sendEmoji = () => {
    console.log("HEEHEHEHEHE");
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <ImageWrap>
          <img src="http://placehold.it/257x200.jpg"></img>
          <ImageDescriptionLayer>
            <ImageDescription>MEGAWATT</ImageDescription>
          </ImageDescriptionLayer>
        </ImageWrap>
        {emojis.map((value) => (
          <CardActionArea sx={{ maxWidth: 200, minHeight: 200 }}>
            <Card
              sx={{ maxWidth: 200, minHeight: 200 }}
              onClick={(e) => {
                sendEmoji();
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: 100, textAlign: "center" }}>
                  {value}
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingTop: 8,
        }}
      >
        <Button variant="outlined">Submit</Button>
      </Box>
    </Box>
  );
}

export default EmojiCards;
