const nodemailer = require('nodemailer')

function email(req, res) { // this will be used to send the emails
    const envio = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "rubenslemos@gmail.com",
            pass: "Rum0s1982@",
        }
    })

    var textBody = `FROM: ${req.body.nome} EMAIL: ${req.body.email} MESSAGE: ${req.body.mensagem}`
    var htmlBody = `<h2>Enviado por</h2><p> ${req.body.nome} <a href="mailto:${req.body.email}">${req.body.email}</a></p><p>${req.body.mensagem}</p>`
    var mail = {
        from: `${req.body.email}`, // sender address
        to: 'rubenslemos@gmail.com', // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
        subject: "Contato feito via site", // Subject line
        text: textBody,
        html: htmlBody
    }

    // send mail with defined transport object
    envio.sendMail(mail, function(err, info) {
        if (err) {
            console.log(err);
            req.flash('error_msg', "Erro ao enviar o e-mail: ", err);
        } else {
            req.flash('success_msg', "Email enviado com sucesso")
            res.redirect('/contato');
        }
    })
}
module.exports = { email: email }