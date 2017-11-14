/**
 * Created by Yimmy Quispe Yujra on 14/11/2017.
 */
module.exports = {
    estaLogueado: function(request, response, next) {
        if (request.isAuthenticated()) {
            next();
        } else {
            response.redirect('/');
        }
    }
}
