const express = require('express')
const insert = require('./CreateTables')
const Logins = insert.Login
const bcryptjs = require('bcryptjs')
var erros = []
const orcamento = function(req, res) {
    insert.Orcamento.create({
        peca: req.body.peca,
        compras: req.body.compras,
        quantidade: req.body.quantidade,
        lucro: req.body.lucro,
        venda: req.body.venda,
        maodeobra: req.body.maodeobra,
        servicos: req.body.servicos
    }).then(function() {
        res.render("index", { page: 'orcamento' })
        req.flash('success_msg', "Orçamento cadastrado com sucesso")
    }).catch(function(erro) {
        res.send("Falha ao salvar: " + erro)
    })
}
const usuarios = function(req, res) {
    insert.Usuarios.create({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        nascimento: req.body.nascimento,
        sexo: req.body.sexo,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        senha: req.body.senha,
        confirma: req.body.confirma,
    }).then(function() {
        res.render("index", { page: 'clientes' })
        req.flash('success_msg', "Cliente cadastrado com sucesso")
    }).catch(function(erro) {
        res.send("Falha ao criar Usuario, erro: " + erro)
    })
}
const login = async(req, res) => {
    erros = []
    if (!req.body.usuario || typeof req.body.usuario == undefined || req.body.usuario == null) {
        erros.push({ texto: "Usuário Invalido" })
    }
    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        erros.push({ texto: "Email Invalido" })
    }
    if (!req.body.Senha || typeof req.body.Senha == undefined || req.body.Senha == null) {
        erros.push({ texto: "Senha Invalida" })
    }
    if (req.body.Senha != req.body.confirmar) {
        erros.push({ texto: "Senha e Confirma Senha diferentes" })
    }
    if (req.body.usuario.length < 3) {
        erros.push({ texto: "Nome muito curto, favor digitar outro Nome" })
    }
    if (req.body.email.length < 3) {
        erros.push({ texto: "email incorreto, favor digitar corretamente" })
    }
    if (req.body.Senha.length < 3) {
        erros.push({ texto: "Senha muito curta, favor digitar outra Senha" })
    }
    if (erros.length > 0) {
        res.render("index", { page: 'cadastrologin', erros: erros })
        console.log(erros)
        console.log(insert.Login.Senha)
        console.log(insert.Login.confirmar)
    } else {
        await insert.Login.findOne({ where: { email: req.body.email } }).then((Login) => {
            if (Login) {
                erros.push(" E-mail já cadastrado ")
                res.render("index", { page: 'cadastrologin' })
                console.log(erros)
                console.log(insert.Login.email)
                console.log(Login.email)
            } else {
                insert.Login.create({
                    usuario: req.body.usuario,
                    email: req.body.email,
                    Senha: req.body.Senha,
                    eAdmin: 1
                })
                insert.Login.beforeCreate(async(Logins, options) => {

                    try {
                        const hash = await bcryptjs.hash(Logins.Senha, 10)
                        Logins.Senha = hash
                        req.flash("success_msg", "Usuário cadastrado com sucesso")
                        res.redirect("/")
                    } catch (erros) {
                        console.log(Logins.Senha)
                        console.log(erros)
                        res.render("index", { page: 'home' })
                    }
                });
            }
        })
    }
}
module.exports = {
    orcamento: orcamento,
    usuarios: usuarios,
    login: login,
    erros: erros
}