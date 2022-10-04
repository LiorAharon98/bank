const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const UserRoute = require("./routes/User.route");
// const UserModel = require("../models/UserModel");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bank");
const setServerConfiguration = require("./config");

setServerConfiguration(app);

// app.use("/bank", UserRoute);
app.get("/", async (req, res) => {
  res.send("fdsfns");
});

app.listen(process.env.PORT || 8000, () => {
  console.log("yes");
});
