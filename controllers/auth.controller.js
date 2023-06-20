require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userModel } = require("../models/auth.model");

const userRegister = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.json({ message: "user already register" });
    }
    const hashedPassword = await bcrypt.hash(password, 4);
    const newUser = await new userModel({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.json({ message: "register sucessfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ message: "wrong credential" });
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      return res.json({ message: "wrong password" });
    }
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);
    res.json({ token, user });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { userRegister, userLogin };
