/**
 * Created by Yimmy Quispe Yujra on 09/11/2017.
 */

var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = {
    login: function (request, response, next) {
        response.render('usuario/login', {message: request.flash('info')});
    },

    index: function (request, response, next) {
        response.render('usuario/registrar');
    },

    store: function (request, response, next) {
        var salt = bcrypt.genSalt(10);
        var password = bcrypt.hashSync(request.body.password, 10);
        console.log(salt);

        var usuario = {
            nombre: request.body.user,
            email: request.body.email,
            password: password
        };

        var config = require('../database/config');
        var db = mysql.createConnection(config);
        db.connect();
        db.query("INSERT INTO usuarios SET ?", usuario, function (err, rows, fields) {
            if (err) throw err;
            db.end();
        });

        request.flash('info', 'Se ha registrado correctamente, ya pueede iniciar sesion');
        response.redirect('/login');
    }
};