/* Importing the upload function from the storageImg file. */
const { storeImg } = require("../services/storageImg");

const imgModel = require("../models/imgModel");

async function imgRegistration(req, res) {
  /* collect the image "photoBase64" from Front */
  const imgBase64 = await req.body.imgBase64;

  const imgName = await storeImg(imgBase64);
  imgModel.insertImg(imgName);

  //   res.status(201);
}

async function allImg(req, res) {
  const pictures = await imgModel.getAllImg();
  res.json(pictures);
}

module.exports = {
  imgRegistration,
  allImg,
};
