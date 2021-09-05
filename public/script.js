document.querySelector('.hamburger').addEventListener('click', () =>
    document.querySelector('.container').classList.toggle('show-menu')
);

const inputs = document.querySelector('form')
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    Email.send({
        Host: "smtp.elasticemail.com",
        port: 2525,
        Username: "rubenslemos@gmail.com",
        Password: "AA487D1DFDA966CA80A4B147029F09588C6E",
        To: 'rubenslemos@gmail.com.br',
        From: inputs.elements["email"].value,
        Subject: "Email vindo da Área de contato da Vallence",
        Body: inputs.elements["mensagem"].value + "<br>" + inputs.elements["nome"].value
    }).then(
        message => alert("Email Enviado com Sucesso"),
        console.log("Email Enviado com Sucesso")
    ).catch((err) => {
        message => alert("Email não enviado, erro: " + err),
            console.log("Email não enviado, erro: " + err)
    })
})