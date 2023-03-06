const User = require("../models/userModal");

//Login user

const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

//singUp user
const signupUser = async (req, res) => {
  res.json({ message: "signup" });
};

module.exports = {
  loginUser,
  signupUser,
};
