const express = require("express");
const router = express.Router();

// const { usersRouter } = require("./usersRoute");
const { imgRouter } = require("./imgRoute");

// router.use("/users", usersRouter);
router.use("/img", imgRouter);

module.exports = { router };

// const { Router } = require("express");

// // const { usersRouter } = require("./usersRoute");
// const { imgRouter } = require("./imgRoute");

// const router = new Router();

// // router.use("/users", usersRouter);
// router.use("/img", imgRouter);

// module.exports = { router };
