const PORT = 8000;
const express = require("express");
const router = express.Router();
const ejs = require("ejs");
const passport = require("passport");
const session = require("express-session");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  require("express-session")({
    secret: "aQuickBrownFox",
  })
);


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
