const express = require("express");
const connectDB = require("./config/db.js");
const bodyParser = require("body-parser");
const passport = require("passport");
require("./config/passport")(passport);
const bcrypt = require("bcrypt");
const cors = require("cors");

//Routes
const userRoutes = require("./routes/userRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

//Main
const app = express();
app.use(cors());

const jsonParser = bodyParser.json();
const port = process.env.PORT || 3000;

connectDB();
app.use(passport.initialize());
app.use(jsonParser);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(port, () => {
  console.log("App listening on port: ", port);
});
