const { db } = require("./db");

async function getAll() {
  const [rows] = await db.query("SELECT * FROM user");
  return rows;
}

async function insertOne(user) {
  const { username, password } = user;

  const [result] = await db.query(
    "INSERT INTO user (username, password) VALUES (?, ?)",
    [username, password]
  );

  return result.insertId;
}

module.exports = { insertOne, getAll };
