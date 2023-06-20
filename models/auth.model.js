const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  email: String,
  password: String,
});
const userModel = model("user", userSchema);

module.exports = { userModel };
