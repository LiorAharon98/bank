const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  income: Number,
  balance: Number,
  maxLoan: Number,
  expense: Array,
  creditCard: Object,
  profilePicture: String,
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();

  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
