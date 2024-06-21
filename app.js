const express = require("express");
const router = require("express").Router();

const app = express();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/hello", (req, res) => {
  res.send("Hello!!!");
});

app.use("/", router);

module.exports = app;
