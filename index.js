const express = require("express");
const json = require("json");
const app = express();
app.use(express.json());
const http = require("http");
const path = require("path");
let ejs = require("ejs");

// app.use(express.static("index.html"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/lobby", (req, res) => {
  res.render(__dirname + "/lobby.ejs", { users: user });
});
app.post("/", (req, res) => {
  if (user.includes(req.body.name)) {
    res.json({
      msg: "failed",
    });
  } else {
    user.push(req.body.name);
    console.log(user);
    res.json({
      msg: "success",
    });
  }
});

const server = http.createServer(app);
server.listen(3000, () => console.log("Listening to port:3000"));

var user = [];
