const express = require("express");
const cors = require("cors");
const corsOptions = {
  origin: "https://nodejs-bank.herokuapp.com",
  credentials: true,
};
const setServerConfiguration = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors(corsOptions));
};
module.exports = setServerConfiguration;
