const express = require("express");
const loginController = require("../../controllers/loginController");
const registrationController = require("../../controllers/registrationController");
const route = express.Router();

route.post("/registration", registrationController);
route.post("/login", loginController);

module.exports = route;
