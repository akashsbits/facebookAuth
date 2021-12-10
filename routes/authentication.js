const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/auth/fb", passport.authenticate("facebook", { scope: "email" }));

router.get(
  "/fb/cb",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/home");
  }
);

module.exports = router;
