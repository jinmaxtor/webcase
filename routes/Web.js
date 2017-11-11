var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/*
// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', controllers.HomeController.index);

router.get('/login', controllers.UserController.login);
router.get('/registrar', controllers.UserController.index);
router.post('/registrar', controllers.UserController.store);

module.exports = router;
