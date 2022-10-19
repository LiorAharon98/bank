const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
router.get("/admin", async (req, res) => {
  const users = await UserModel.find({});
  res.json(users);
});
router.post("/sign-up", async (req, res) => {
  const user = { ...req.body };
  await UserModel.create(user);
  res.json("ok");
});
router.post("/sign-in", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.find({ username: username, password: password });

  res.json(user);
});
router.post("/user/transfer-money", async (req, res) => {
  const { username, money, usernameToTransfer } = req.body;
  const filter = { username: usernameToTransfer };
  const update = { balance: money.price };
  const userToTransfer = await UserModel.findOneAndUpdate(filter, { $inc: update, $push: { expense: {...money , moneyType : 'received '} } });
  await UserModel.findOneAndUpdate(
    { username: username },
    { $inc: { balance: -money.price }, $push: { expense: money } }
  );
  if (!userToTransfer) return res.json(null);
  const responseUser = await UserModel.find({ username: username });
  res.json(responseUser);
});
router.post("/user/loan", async (req, res) => {
  const { username, money } = req.body;
  const filter = { username: username };
  const update = { balance: money.price };
  await UserModel.findOneAndUpdate(filter, { $inc: update, $push: { expense: money } });
  const responseUser = await UserModel.find({ username: username });
  res.json(responseUser);
});
router.post("/user/update-user-details", (req, res) => {
  const details = { ...req.body };
});

module.exports = router;
