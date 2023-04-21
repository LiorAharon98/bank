const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, minlength: 5, required: true },
  email: { type: String, unique: true, required: true },
  income: { type: Number, minlength: 4, required: true },
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
