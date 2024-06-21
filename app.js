const express = require("express");
const router = require("express").Router();

const app = express();

//const router = Router();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hello", (req, res) => {
  res.send("Hello!!!");
});

//app.use("/", router);

module.exports = app;
