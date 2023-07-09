import { useState } from "react";
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
  const [selectedCard, setSelectedCard] = useState("");
  // const emojis = ["😁", "🙂", "😐", "😟", "😰"];
  const emojiDescriptions = [
    "Great! I think I could explain the main ideas to a friend.",
    "Good. I understand most of what we learned today, but I still have a few questions.",
    "Okay. I have some questions, but I don't feel lost.",
    "Slightly Confused. I have many questions about what we learned today.",
    "Very confused! I think I need another explanation of some of the main ideas from today.",
  ];

  const handleCardSelection = (value) => {
    setSelectedCard(value);
    console.log(value);
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
        {/* <ImageWrap>
          <img src="http://placehold.it/257x200.jpg"></img>
          <ImageDescriptionLayer>
            <ImageDescription>MEGAWATT</ImageDescription>
          </ImageDescriptionLayer>
        </ImageWrap> */}
        {emojiDescriptions.map((value) => (
          <Box>
            <CardActionArea sx={{ maxWidth: 200, minHeight: 200 }}>
              <Card
                sx={{ maxWidth: 200, minHeight: 200 }}
                onClick={() => {
                  handleCardSelection(value);
                }}
                key={value}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 18, textAlign: "center" }}>
                    {value}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default EmojiCards;
