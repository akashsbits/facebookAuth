const PORT = 8000;
const express = require("express");
const router = express.Router();
const ejs = require("ejs");
const passport = require("passport");
const session = require("express-session");
const path = require("path");

const indexRouter = require("./routes/index");
const authRouter = require("./routes/authentication");
const homeRouter = require("./routes/home");

const app = express();

require("./config/passport")();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  require("express-session")({
    secret: "aQuickBrownFox",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/home", homeRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
