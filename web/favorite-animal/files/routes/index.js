var express = require('express');
var router = express.Router();
var fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.cookies);
  let user = req.query.username
  if (user === undefined) {
    user = req.cookies["username"]
    if (user === undefined) {
      return res.redirect("/login");
    }
  }
  fs.readFile(`db/${user}`, function(err, data) {
    res.setHeader("Content-Security-Policy", "default-src * 'unsafe-inline' 'unsafe-eval';")
    return res.render('index', { user: user, time: Date().toString(), animal: data, title: `Hello, ${user}!` });
  });
  
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', {title: "Login"});
});

router.post('/api/login', (req, res, next) => {
  const username = req.body.username;
  if (username.includes(".") || username.includes("/")) {
    res.status(400);
    res.send("Invalid username");
    return;
  }
  const favorite_animal = req.body.favorite_animal
  try {
    const exists = fs.existsSync(`db/${username}`);
    if (exists) {
      res.status(400);
      res.send("Username already taken");
      return;
    }
  
  } catch(err) {
  }

  fs.writeFile(`db/${username}`, favorite_animal, function (err) {
    if (err) throw err;
    console.log('Created file db/${username}');
    res.cookie("username", username );
    res.send("<a href='/'>Success! Click here to return to the home page.</a>");
    return;
  }); 

});

module.exports = router;
