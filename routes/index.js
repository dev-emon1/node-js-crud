const express = require("express");
const route = express.Router();
const apiRoutes = require("./api");

route.use("/", apiRoutes);

module.exports = route;
