const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const emailValidation = require("../middlewares/emailValidation");

const registrationController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.send({ error: "Please fill the all field" });
    }

    if (email && !emailValidation(email)) {
      return res.send({ error: "Email is not valid" });
    }

    if (password && password.length < 6) {
      return res.send({ error: "Password is too short" });
    }

    const existingEmail = await User.find({ email: email });

    if (existingEmail.length > 0) {
      res.send({ error: "Email already in used" });
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        const user = new User({
          name: name,
          email: email,
          password: hash,
        });
        await user.save();

        res.send({
          success: "Registration successful",
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = registrationController;
