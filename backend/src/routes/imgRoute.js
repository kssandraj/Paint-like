const express = require("express");

const imgController = require("../controllers/imgController");

const imgRouter = express.Router();

imgRouter.post("/submit", imgController.imgRegistration);
