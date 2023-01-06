const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const allUsers = async () => {
  const users = await UserModel.find({});
  return users;
};
const findSpecificUser = async (id) => {
  const user = await UserModel.findOne({ _id: id });

  return user;
};
const verifyTokenJwt = (token)=>{
  return jwt.verify(token,'liors-secret')
 
}

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
  const { money, usernameToTransfer,token } = req.body;
  
  const filter = { username: usernameToTransfer };
  const update = { balance: money.price };
  const checkUser = await UserModel.findOne(filter);
  if (!checkUser) return res.json(null);

  await UserModel.findOneAndUpdate(filter, {
    $inc: update,
    $push: { expense: { ...money, moneyType: "received ", id: checkUser.expense.length } },
  });
  await UserModel.findOneAndUpdate({ _id: verifyTokenJwt(token) }, { $inc: { balance: -money.price }, $push: { expense: money } });

  const responseUser = await findSpecificUser(verifyTokenJwt(token));
  res.json(responseUser);
});


router.post("/user/loan", async (req, res) => {
  const { money, token, id } = req.body;

  const filter = { _id: verifyTokenJwt(token) };
  const update = { balance: money.price, maxLoan: -money.price };
  await UserModel.findOneAndUpdate(filter, { $inc: update, $push: { expense: money,id } });
  const responseUser = await findSpecificUser(verifyTokenJwt(token));
  res.json(responseUser);
});
router.post("/user/update-user-details", async (req, res) => {
  const { info, value, token } = req.body;
  await UserModel.findOneAndUpdate({ _id: verifyTokenJwt(token) }, { [info]: value });
  const user = await findSpecificUser(verifyTokenJwt(token));
  res.json(user);
});
router.put("/user/update-user-details", async (req, res) => {
  const {  profilePicture,token } = req.body;
  await UserModel.findOneAndUpdate({ _id: verifyTokenJwt(token) }, { profilePicture });
  const user = await findSpecificUser(verifyTokenJwt(token));

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
    if (allCvv[i] == generateCvv || generateCvv <= 100) generateCvv = Math.floor(Math.random() * 999);
  }

  const cardNumber = [4580, 3900, Math.floor(Math.random() * 9999), Math.floor(Math.random() * 9999)];

  const creditCard = { ...req.body, cvv: generateCvv, cardNumber: cardNumber };
  const filter = { username: req.body.cardHolder };
  const update = { creditCard };
  await UserModel.findOneAndUpdate(filter, update);
  const user = await UserModel.find(filter);
  res.json(user);
});

module.exports = router;
