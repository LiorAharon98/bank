const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
router.get("/bank", async (req, res) => {
  await UserModel.find({}, (err, users) => {
    res.json(users);
    res.send('ok')
  }).clone();
});
router.post("/sign-up", async (req, res) => {
  const user = { ...req.body };
  await UserModel.create(user);
  res.json("ok");
});
router.post("/user/transfer-money", async (req, res) => {
  const { username, money, usernameToTransfer } = req.body;
  const filter = { username: usernameToTransfer };
  const update = { balance: money.price };
  await UserModel.findOneAndUpdate(filter, { $inc: update });
  await UserModel.findOneAndUpdate(
    { username: username },
    { $inc: { balance: -money.price }, $push: { expense: money } }
  );
  res.json("ok");
});
router.post("/user/loan", async (req, res) => {
  const { username, money } = req.body;
  const filter = { username: username };
  const update = { balance: money.price };
  await UserModel.findOneAndUpdate(filter, { $inc: update, $push: { expense: money } });
  res.json("ok");
});
router.post("/user/update-user-details", (req, res) => {
  const details = { ...req.body };
});

module.exports = router;
