var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('resume', { name: 'Raven Lickey' });
  navigate(2);
});
module.exports = router;
