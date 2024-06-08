const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email: email });

    if (findUser) {
      bcrypt.compare(password, findUser.password, async function (err, result) {
        const token = jwt.sign(
          { id: findUser._id, email: findUser.email },
          process.env.TOKEN_SECRET,
          { expiresIn: "1h" }
        );

        if (result) {
          return res.send({
            success: "Login success",
            token: token,
          });
        } else {
          return res.send({ error: "Credential not matched" });
        }
      });
    } else {
      return res.send({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = loginController;
