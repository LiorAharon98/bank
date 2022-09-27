const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  income: Number,
  balance: Number,
  expense: Array,
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
