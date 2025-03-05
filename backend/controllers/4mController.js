const UserModel = require("../models/4mModel");


const userSave = async (req, res) => {
  const { rollno, name, city } = req.body;
  const myimg = req.file.filename;

  const User = await UserModel.create({
    rollno: rollno,
    name: name,
    city: city,
    image: myimg
  })

  res.send("OKKK");
}

const userDisplay = async (req, res) => {
  const User = await UserModel.find();
  res.send(User);
}

module.exports = {
  userSave,
  userDisplay

}