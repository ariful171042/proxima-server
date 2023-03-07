const User = require("../models/userModal");

//Login user
const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

//singUp user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    //create token
    // const token = createToken(user._id);

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
