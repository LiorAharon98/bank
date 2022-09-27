const express = require("express");
const cors = require("cors");

const setServerConfiguration = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
};
module.exports = setServerConfiguration;
