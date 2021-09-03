const express = require('express')
const insert = require('./CreateTables')
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
        res.render("index")
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
        res.render("add")
    }).catch(function(erro) {
        res.send("Falha ao criar Usuario, erro: " + erro)
    })
}
document.getElementById('salvarContato').addEventListener('submit', salvarContato)

function salvarContato(event) {
    event.preventDefault();
    usuarios
}
export const orcamento = orcamento
export const usuarios = usuarios