var express = require('express');
var router = express.Router();
var fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  // Get the username using the ?username query parameter
  let user = req.query.username
  if (user === undefined) {
    // If query parameter doesn't exist, look for it in the cookies
    user = req.cookies["username"]
    if (user === undefined) {
      // if still not found, have the user log in
      return res.redirect("/login");
    }
  }
  // Try and find the user's data file using the format db/USERNAME
  fs.readFile(`db/${user}`, function(err, data) {
    res.setHeader("Content-Security-Policy", "default-src * 'unsafe-inline' 'unsafe-eval';") // Who needs security >:( let the <script> tag be free!
    return res.render('index', { user: user, time: Date().toString(), animal: data, title: `Hello, ${user}!` });
  });
  
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', {title: "Login"});
});

/* POST login api. */
router.post('/api/login', (req, res, next) => {
  // Get username from request
  const username = req.body.username;
  // Don't let users use bad characters, I'm not that dumb!!!
  if (username.includes(".") || username.includes("/")) {
    res.status(400);
    res.send("Invalid username");
    return;
  }
  // Get favorite animal from request
  const favorite_animal = req.body.favorite_animal
  // Make sure this is a new user
  try {
    const exists = fs.existsSync(`db/${username}`);
    if (exists) {
      res.status(400);
      res.send("Username already taken");
      return;
    }
  
  } catch(err) {
  }

  // Create the user file with the content being their favorite animal so we can read it later
  fs.writeFile(`db/${username}`, favorite_animal, function (err) {
    if (err) throw err;
    console.log('Created file db/${username}');
    // Store the user's username in their cookies so we can see it before
    // Users TOTALLY cannot change this themselves at all, no way!
    res.cookie("username", username );
    res.send("<a href='/'>Success! Click here to return to the home page.</a>");
    return;
  }); 

});

module.exports = router;
