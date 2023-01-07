const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const verifyTokenJwt = (token) => {
  return jwt.verify(token, "liors-secret");
};

router.get("/admin", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});
router.post("/sign-up", async (req, res) => {
  try {
    await UserModel.create(req.body);
  } catch (error) {
    console.log(error);
  }
});
router.post("/sign-in", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    const token = jwt.sign(user.id, "liors-secret");
    const final = [user, token];
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return res.json(final);
    }
  }
  res.json(null);
});

router.post("/user/transfer-money", async (req, res) => {
  const { money, usernameToTransfer, token } = req.body;

  const filter = { username: usernameToTransfer };
  const update = { balance: money.price };

  const usernameReceivedMoney = await UserModel.findOneAndUpdate(
    filter,
    {
      $inc: update,
      $push: { expense: { ...money, moneyType: "received ", id: checkUser.expense.length } },
    },
    { new: true }
  );
  if (!usernameReceivedMoney) return res.json(null);
  const currentUser = await UserModel.findByIdAndUpdate(
    verifyTokenJwt(token),
    {
      $inc: { balance: -money.price },
      $push: { expense: money },
    },
    { new: true }
  );

  res.json(currentUser);
});

router.post("/user/loan", async (req, res) => {
  const { money, token, id } = req.body;

  const update = { balance: money.price, maxLoan: -money.price };
  const user = await UserModel.findByIdAndUpdate(
    verifyTokenJwt(token),
    { $inc: update, $push: { expense: money, id } },
    { new: true }
  );

  res.json(user);
});
router.post("/user/update-user-details", async (req, res) => {
  const { info, value, token } = req.body;
  const user = await UserModel.findByIdAndUpdate(verifyTokenJwt(token), { [info]: value }, { new: true });

  res.json(user);
});
router.put("/user/update-user-details", async (req, res) => {
  const { profilePicture, token } = req.body;
  const user = await UserModel.findByIdAndUpdate(verifyTokenJwt(token), { profilePicture }, { new: true });

  res.json(user);
});
router.post("/user/credit-card", async (req, res) => {
  let generateCvv = Math.floor(Math.random() * 999);
  let found = false;

  while (!found) {
    const test = await UserModel.findOne({ "creditCard.cvv": generateCvv });

    if (test) generateCvv = Math.floor(Math.random() * 999);
    else found = true;
  }

  const cardNumber = [4580, 3900, Math.floor(Math.random() * 9999), Math.floor(Math.random() * 9999)];

  const creditCard = { ...req.body, cvv: generateCvv, cardNumber: cardNumber };
  const filter = { username: req.body.cardHolder };
  const update = { creditCard };
  const user = await UserModel.findOneAndUpdate(filter, update, { new: true });

  res.json(user);
});

module.exports = router;
