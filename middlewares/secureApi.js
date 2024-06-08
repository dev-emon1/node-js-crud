const secureApi = (req, res, next) => {
  if (req.headers.authorization === "lorem@geo") {
    next();
  } else {
    res.send({ error: "Invalid API." });
  }
};

module.exports = secureApi;
