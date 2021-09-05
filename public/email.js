const nodemailer = require('nodemailer')
const form = document.querySelector('form')
const enviar = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rubenslemos@gmail.com',
        pass: 'Rum0s1982@'
    }
})

const mailOptions = {
    from: 'rubenslemos@gmail.com',
    to: form.elements["email"].value,
    text: "Nome: " + form.elements['nome'] + "<br> Mensagem: " + form.elements['mensagem'].value
}

enviar.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Erro: ", error)
    } else {
        console.log('Enviado com sucesso: ', info.response)
    }
})
module.exports = {
    enviar: enviar
}