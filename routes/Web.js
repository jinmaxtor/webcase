var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('../controllers');
var AuthMiddleware = require('../middleware/auth');

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
    successRedirect: '/welcome',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/welcome', AuthMiddleware.estaLogueado, controllers.HomeController.welcome);

router.get('/logout', controllers.UserController.logout);

router.get('/prueba', function (request, response, next) {
    response.render('diagramador');
});

router.get('/proyecto', AuthMiddleware.estaLogueado,function (request, response, next) {
    response.render('usuario/index', {
        isAuthenticated: request.isAuthenticated(),
        usuario: request.user
    });
});

router.get('/diagrama', AuthMiddleware.estaLogueado,function (request, response, next) {
    response.render('diagramador', {
        isAuthenticated: request.isAuthenticated(),
        usuario: request.user
    });
});

module.exports = router;
