const express = require("express");
const route = express.Router();
const auth = require("./auth");
const taskRoute = require("./tasks");

route.use("/", auth);
route.use("/", taskRoute);

module.exports = route;
