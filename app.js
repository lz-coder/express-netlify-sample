const express = require("express");
const router = require("express").Router();

const app = express();

//const router = Router();
router.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", router);

module.exports = app;
