const mongoose = require("mongoose");
const UserModal = require("./models/UserModel");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);
const handleFunc = async () => {
  if (new Date().getDate() === 1) {
    UserModal.find({}, async (err, data) => {
      for (let i = 0; i < data.length; i++) {
        await UserModal.findOneAndUpdate({ username: data[i].username }, { $inc: { balance: data[i].income } });
      }
    });
  }
};
handleFunc();
