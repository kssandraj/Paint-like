const { db } = require("./db");

async function insertImg(imgName, createdAt, score, userId) {
  const [result] = await db.query("INSERT INTO photo (imgName) VALUES (?)", [
    imgName,
  ]);

  return result;
}

async function getAllPictures() {
  const [result] = await db.query(
    "SELECT photo.createdAt, photo.imgName, photo.id, user.username FROM photo INNER JOIN user ON photo.userId=user.id ORDER BY photo.createdAt DESC"
  );
  return result;
}

module.exports = {
  insertImg,
  getAllPictures,
};
