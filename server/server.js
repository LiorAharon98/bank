const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserRoute = require("./routes/User.route");
const setServerConfiguration = require("./config");
require("dotenv").config();
setServerConfiguration(app);
mongoose.connect(process.env.MONGODB_URI);

app.use("/bank", UserRoute);

app.listen(process.env.PORT);
