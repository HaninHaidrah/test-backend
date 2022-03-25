"use strict";

const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const v1Router = require("./routes/userRoute");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use( "/api/v1",v1Router);

// start function:

function start() {
  app.listen(PORT, () => console.log("server is working on", PORT));
}

module.exports = {
  start: start,
  app: app,
};
