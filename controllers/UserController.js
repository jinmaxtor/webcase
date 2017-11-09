/**
 * Created by Yimmy Quispe Yujra on 09/11/2017.
 */

var mysql = require('mysql');

module.exports = {
    registrar: function (request, response, next) {
        response.render('usuario/registrar');
    }
};