require("dotenv").config();
const express = require("express");
const route = require("./routes");
const mongoConfig = require("./configs/mongoConfig");
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/", route);

app.all("*", (req, res) => {
  res.send("No route found");
});

// database
mongoConfig();

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
