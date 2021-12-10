const express = require("express");
const passport = require("passport");

var router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

router.get("/", isLoggedIn, (req, res) => {
  var user = new Object();
  user.id = req.user.id;
  user.name = req.user.name.givenName + " " + req.user.name.familyName;
  user.email = req.user.emails[0].value;
  user.avatar = req.user.photos[0].value;

  res.render("home.ejs", { user: user });
});

module.exports = router;
