const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserRoute = require("./routes/User.route");
const setServerConfiguration = require("./config");
require("dotenv").config();
setServerConfiguration(app);
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI);



app.use("/bank", UserRoute);
app.get("/", (req, res) => {
    res.status(200).send("API is alive and healthy!");
});
app.listen(process.env.PORT, () => {
    console.log('Server is up!!!');
});