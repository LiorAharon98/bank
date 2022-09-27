const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
router.get("/", async (req, res) => {
  UserModel.find({}, (err, users) => {
    res.json(users);
  });
});
router.post("/sign-up", async (req, res) => {
  const user = { ...req.body };
  await UserModel.create(user);
});
router.post("/user/transfer-money", async (req, res) => {
  const { username, price, usernameToTransfer } = req.body;
  const filter = { username: usernameToTransfer };
  const update = { balance: Number(price) };
  await UserModel.findOneAndUpdate(filter, { $inc: update });
  await UserModel.findOneAndUpdate({ username: username }, { $inc: { balance: -price }, $push: { expense: price } });
});
router.post("/user/loan", async (req, res) => {
  const { username, price } = req.body;
  const filter = { username: username };
  const update = { balance: Number(price) };
  await UserModel.findOneAndUpdate(filter, { $inc: update });
});
router.post("/user/update-user-details", (req, res) => {
  const details = { ...req.body };
});

module.exports = router;
