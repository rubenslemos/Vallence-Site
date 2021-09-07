const http = require('express');
const app = http();
const route = require('./public/route')
const path = require('path');
const moment = require("moment");
const session = require('express-session')
const flash = require('connect-flash')
const eAdmin = require('./public/eAdmin')
const passport = require('passport')
require('./public/auth')(passport)
app.use(session({
    secret: "Rumos1982",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 60 * 1000 }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(eAdmin.control)
app.use((req, res, next) => {
    res.locals.moment = moment;
    next();
});
const log = function(request, response, next) {
    console.log(`${new Date()}: ${request.protocol}://${request.get('host')}${request.originalUrl}`);
    console.log(request.body); // make sure JSON middleware is loaded before this line
    next();
}
app.use(log);

app.set('view engine', 'ejs');
app.use(http.static("public"));
app.set('views', path.join(__dirname, 'views'));
app.use(http.urlencoded({ extended: false }))
app.use(http.json())
app.use(route)
app.listen(8081, () => console.log("Rodando!"));