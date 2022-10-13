const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserRoute = require("./routes/User.route");
const setServerConfiguration = require("./config");

setServerConfiguration(app);
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://liors-database:lior.ah98@cluster0.iybrzvm.mongodb.net/bank?retryWrites=true&w=majority"
);

app.use("/bank", UserRoute);

app.listen(process.env.PORT || 8000);
