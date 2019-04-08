var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  if(req.user == undefined) {
    res.render('index', { title: 'Express' });
  } else {
    res.render('index', { title: 'Express', user: req.user.name });
  }
});

module.exports = router;
