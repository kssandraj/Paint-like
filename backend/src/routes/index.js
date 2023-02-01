const { Router } = require("express");

const { usersRouter } = require("./usersRoute");

const router = new Router();

router.use("/users", usersRouter);

module.exports = { router };
