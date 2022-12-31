const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const UserModel = require("../models/UserModel");
const allUsers = async () => {
  const users = await UserModel.find({});
  return users;
};
const findSpecificUser = async (keyValue,value) => {
  const user = await UserModel.findOne({ [keyValue] : value });
  return user;
};

router.get("/admin", async (req, res) => {
  const users = await allUsers();
  res.json(users);
});
router.post("/sign-up", async (req, res) => {
  const user = { ...req.body };
  await UserModel.create(user);
});
router.post("/sign-in", async (req, res) => {
  const { username, password } = req.body;
  const user = await findSpecificUser('username',username);
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return res.json(user);
    }
  }
  res.json(null);
});

router.post("/user/transfer-money", async (req, res) => {
  const { username, money, usernameToTransfer, id } = req.body;
  const filter = { username: usernameToTransfer };
  const update = { balance: money.price };
  const userToTransfer = await UserModel.findOneAndUpdate(filter, {
    $inc: update,
    $push: { expense: { ...money, moneyType: "received ", id: id } },
  });
  if (!userToTransfer) return res.json(null);
  await UserModel.findOneAndUpdate(
    { username: username },
    { $inc: { balance: -money.price }, $push: { expense: money } }
  );
  const responseUser = await findSpecificUser('username',username);
  res.json(responseUser);
});

router.post("/user/loan", async (req, res) => {
  const { username, money, id } = req.body;
  const filter = { username: username };
  const update = { balance: money.price, maxLoan: -money.price };
  await UserModel.findOneAndUpdate(filter, { $inc: update, $push: { expense: money, id: id } });
  const responseUser = await findSpecificUser('username',username);
  res.json(responseUser);
});
router.post("/user/update-user-details", async (req, res) => {
  const { info, value, id } = req.body;
  await UserModel.findOneAndUpdate({ id: id }, { [info]: value });
  const user = await findSpecificUser('id',id);
  res.json(user);
});
router.put("/user/update-user-details", async (req, res) => {
  const { id, profilePicture } = req.body;
  await UserModel.findOneAndUpdate({ id }, { profilePicture });
  const user = await findSpecificUser('id',id);
  console.log(user)
  res.json(user);
});
router.post("/user/credit-card", async (req, res) => {
  let generateCvv = Math.floor(Math.random() * 999);
  const fetchAllUsers = await allUsers();
  const allCvv = fetchAllUsers.map((user) => {
    if (!user.creditCard) return;
    return user.creditCard.cvv;
  });

  for (let i = 0; i < allCvv.length; i++) {
    if (allCvv[i] == generateCvv) generateCvv = Math.floor(Math.random() * 999);
  }

  const cardNumber = [4580, 3900, Math.floor(Math.random() * 9999), Math.floor(Math.random() * 9999)];

  const creditCard = { ...req.body, cvv: generateCvv, cardNumber: cardNumber };
  const filter = { username: req.body.cardHolder };
  const update = { creditCard: creditCard };
  await UserModel.findOneAndUpdate(filter, update);
  const user = await UserModel.find(filter);
  res.json(user);
});

module.exports = router;
