const passport = require('passport')

module.exports = {
    login(req, res, next) {
        passport.authenticate("local", {
            successRedirect: '/',
            failureRedirect: "/",
            failureFlash: true
        })(req, res, next)
    },
    logout(req, res) {
        req.logout()
        req.flash("success_msg", "Deslogado com sucesso")
        res.redirect('/')
    }
}