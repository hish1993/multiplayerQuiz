const express = require("express")
const json = require("json")
const app = express()
app.use(express.json())
const http = require("http")

app.use("/home", express.static("index.html"))


app.post("/", (req,res)=>{user.push(req.body.name); console.log(user);})

const server = http.createServer(app)
server.listen(3000, ()=>console.log("Listening to port:3000"))

var user = []


