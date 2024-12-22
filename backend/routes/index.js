var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Loyola Polytechnic, YSRR Backend server' });
});

module.exports = router;
