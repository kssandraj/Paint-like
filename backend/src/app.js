const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { router } = require("./routes");

require("dotenv").config();

fs.mkdirSync(path.resolve(__dirname, "uploads"), {
  recursive: true,
});

const app = express();

app.use(router);

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

module.exports = app;
