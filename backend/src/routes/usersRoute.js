const express = require("express");

const usersController = require("../controllers/usersController");

const usersRouter = express.Router();

usersRouter.post("/register", usersController.create);
usersRouter.get("/", usersController.list);

module.exports = { usersRouter };
