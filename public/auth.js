const localStrategy = require('passport-local')
const bcrypt = require('bcryptjs')
const Logins = require('./CreateTables')
const Login = Logins.Login
module.exports = (passport) => {
    passport = passport.use(new localStrategy({ usernameField: 'email', passwordField: 'Senha' }, (email, Senha, done) => {
            Logins.Login.findOne({ where: { email: email } }).then(async function(email) {
                if (!email) {
                    console.log(email)
                } else {
                    bcrypt.compare(Senha, email.Senha, (error, batem) => {
                        if (batem) {
                            return done(null, email)
                        } else {
                            console.log('Error: ' + error)
                            return done(null, false, { message: "Senha Incorreta" })
                        }
                    })
                }
            })

        })

    )

    passport.serializeUser((Login, done) => {
        done(null, Login.id)
    })
    passport.deserializeUser((id, done) => {
        Logins.Login.findByPk(id).then((login) => {
            console.log('Sucesso!');
            done(null, login);
        }).catch((err) => {
            done(err, null);
        });
    })
}