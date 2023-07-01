import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Title, SubTitle } from "../components/styles/Home.styled.js";

function Home() {
  return (
    <>
      <Title>Temperature Check</Title>
      <SubTitle>I am a..</SubTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignContent: "center",
        }}
      >
        <div
          style={{
            padding: 20,
            alignContent: "center",
          }}
        >
          <Link to="/student">
            <Card sx={{ minWidth: 345 }}>
              <CardMedia
                sx={{ height: 300 }}
                image=".././public/student.gif"
                title="student card"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Student
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
        <div style={{ padding: 20, alignContent: "center" }}>
          <Link to="/teacher">
            <Card sx={{ minWidth: 345 }}>
              <CardMedia
                sx={{ height: 300 }}
                image=".././public/college.gif"
                title="teacher card"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Teacher
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
