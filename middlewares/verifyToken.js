const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.send({ error: "Token is required" });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, async function (err, decoded) {
      if (decoded) {
        next();
      } else {
        return res.send({ error: "Token is invalid" });
      }
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = verifyToken;
