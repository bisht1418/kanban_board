const express = require("express");
const { userLogin, userRegister } = require("../controllers/auth.controller");
const userRoutes = express.Router();

userRoutes.post("/register", userRegister);
userRoutes.post("/login", userLogin);

module.exports = { userRoutes };
