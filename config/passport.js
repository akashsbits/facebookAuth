const passport = require("passport");
const facebookStrategy = require("passport-facebook").Strategy;

module.exports = function () {
  passport.use(
    new facebookStrategy(
      {
        clientID: "1326399514455610",
        clientSecret: "818b7999002a08b056ce57bcbcd45f64",
        callbackURL: "http://localhost:8000/fb/cb",
        profileFields: [
          "id",
          "displayName",
          "name",
          "gender",
          "picture.type(large)",
          "email",
        ],
      },
      // Here we can check in db whether the user is registered or not. If not,
      // then save user obj in db, otherwise log them in.
      function (accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    return done(null, user);
  });
};
