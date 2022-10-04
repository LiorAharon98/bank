const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/UserModel");
const UserRoute = require("./routes/User.route");
mongoose.connect(process.env.MONGODB_URI);
const setServerConfiguration = require("./config");

setServerConfiguration(app);

app.use("/bank", UserRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("yes");
});
