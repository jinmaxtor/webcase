var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    passport.use(new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email', // el nombre name='email' en el form
        passwordField: 'password' // el nombre name='password' en el form
    }, function (request, email, password, done) {
        var config = require('../database/config');
        var db = mysql.createConnection(config);
        db.connect();
        
        db.query('SELECT * FROM usuarios WHERE email = ?', email, function (err, rows, fields) {
            if(err) throw err;

            db.end();
            if(rows.length > 0) {
                var usuario = rows[0];
                if(bcrypt.compareSync(password, usuario.password)){
                    return done(null, {
                        id: usuario.id,
                        nombre: usuario.nombre,
                        email: usuario.email
                    });
                }
            }

            return done(null, false, request.flash('loginmessage', 'Email o Password incorrecto!'));
        });
        console.log(email);
        return;
    }));
};