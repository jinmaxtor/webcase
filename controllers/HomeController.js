/**
 * Created by Yimmy Quispe Yujra on 09/11/2017.
 */

module.exports = {
    index: function (request, response, next) {
        response.render('home');
    },

    welcome: function (request, response, next) {
        response.render('welcome', {
            isAuthenticated: request.isAuthenticated(),
            usuario: request.user
        });
    }
};