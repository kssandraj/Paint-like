const usersModel = require("../models/usersModel");

async function list(req, res) {
  const users = await usersModel.getAll();
  res.json(users);
}

async function create(req, res) {
  const insertId = await usersModel.insertOne(req.body);
  res.json(insertId);
}

module.exports = { list, create };
