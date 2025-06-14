const path = require("node:path");
const express = require("express");
const app = express();
const db = require("./db/queries");

const { body, validationResult } = require("express-validator");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

 
const PORT = 8000;
app.listen(PORT, () => {
  console.log('Latest Version')
  console.log(`My first Express app - listening on port ${PORT}!`);
})

app.get("/", (req, res) => {
  res.render("index",{messages: messages});
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req,res) => {
    messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
    res.redirect("/")
})

app.post("/db", (req, res) => {
    console.log("HIere")
    db.insertPost("dddd")
})

app.get("/db", (req, res) => {
  console.log("get route")
  console.log(db.getPosts())

})
