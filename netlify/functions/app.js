const express = require("express");
const router = require("express").Router();
const serverless = require("serverless-http");

const app = express();

//const router = Router();
router.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", router);

module.exports = app;
module.exports.handler = serverless(app);
