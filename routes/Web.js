var express = require('express');
var router = express.Router();
var passport = require('passport');
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
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/prueba', function (request, response, next) {
    response.render('diagramador');
});

router.get('/user', function (request, response, next) {
    response.render('usuario/index');
})

module.exports = router;
