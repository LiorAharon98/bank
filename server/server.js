const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/UserModel");
const UserRoute = require("./routes/User.route");
mongoose.connect("mongodb://localhost:27017/bank");
const setServerConfiguration = require("./config");
setServerConfiguration(app);

app.use("/bank", UserRoute);

app.listen(5000);
