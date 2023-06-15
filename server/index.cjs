const express = require("express");
const app = express();
const port = 5173;

app.get("/", (req, res) => {
  res.send("IT WORKS");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.............`);
});
