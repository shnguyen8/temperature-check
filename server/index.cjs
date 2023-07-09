const express = require("express");
const app = express();
http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 4000;

const pool = require("./db.cjs");

app.use(cors());

const server = http.createServer(app);

app.post("/temps", async (req, res) => {
  try {
    // console.log(req.body);
    const { username, password, email } = req.body;
    const newTemp = await pool.query(
      "INSERT INTO teacher_users (username, password, email) VALUES($1, $2, $3) RETURNING *",
      [username, password, email]
    );
    res.json(newTemp.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/temps", async (req, res) => {
  const allTemps = await pool.query("SELECT * FROM teacher_users");
  res.json(allTemps.rows);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {
  console.log(`Listening on port ${port}.............`);
});
