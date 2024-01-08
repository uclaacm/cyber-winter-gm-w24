const express = require('express')
var passport = require('passport');
const path = require('path');
var GoogleStrategy = require('passport-google-oidc');
require("dotenv").config()
var crypto = require('crypto');

var session = require('express-session');
var passport = require('passport');

var SQLiteStore = require('connect-sqlite3')(session);

const app = express()
const port = 3000

passport.use(new GoogleStrategy({
  clientID: process.env['GOOGLE_CLIENT_ID'],
  clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
  callbackURL: 'https://bond-together.acmcyber.com/oauth2/redirect/google',
  scope: ['openid', 'profile', 'email']
}, function(issuer, profile, cb) {
  console.log(profile);
  return cb(null, profile);
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_RAND_KEY,
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './' })
}));

app.use(passport.authenticate('session'));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, emails: user.emails });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

const flag_parts = ["Part 1: cyber{excellent_why_", "Part 2: spoken_obtain_", "Part 3: herd_program_"]

app.get('/', (req, res) => {
  res.redirect("/login/federated/google");
})

app.get('/login/federated/google', passport.authenticate('google', {scope: ['openid', 'email', 'profile']}));

app.get('/oauth2/redirect/google', passport.authenticate('google', {
  successRedirect: '/key',
  failureRedirect: '/'
}));

app.get("/key", function(req, res) {
  if (!req.isAuthenticated()) {
    res.redirect("/")
    return;
  }
  console.log(req.user);
  for (const element of req.user["emails"]) {
    if (element["value"].endsWith("@g.ucla.edu")) {
      const h = BigInt("0x" + crypto.createHash('md5').update(element["value"]).digest("hex")) % 3n;
      console.log(h);
      res.send(flag_parts[h]);
      return;
    }
  }
  res.send("<a href='/'>Invalid account - must be your @g.ucla.edu account. Try again by clicking here</a>");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
