const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")

const setServerConfiguration = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser())
};
module.exports = setServerConfiguration;
