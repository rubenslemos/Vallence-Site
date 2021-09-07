const express = require('express')
const route = express()
const insert = require('./Insert')
const deletar = require('./delete')
const read = require('./read')
const create = require('./CreateTables')
const edit = require('./edit')
const login = require('./login')
const eAdmin = require('./eAdmin')
const email = require('./email')
route.get('/', (req, res) => res.render("index", { page: 'home' }))
route.get('/conhecimento', (req, res) => res.render("index", { page: 'conhecimento' }))
route.get('/clientes', eAdmin.logado, (req, res) => res.render("index", { page: 'clientes' }))

route.get('/editarCliente/:id', eAdmin.eAdmin, edit.exibirCliente)
route.post('/editarCliente', eAdmin.eAdmin, edit.editarCliente)

route.get('/editarOrcamento/:id', eAdmin.eAdmin, edit.exibirOrcamento)
route.post('/editarOrcamento', eAdmin.eAdmin, edit.editarOrcamento)

route.get('/listaclientes', eAdmin.logado, (read.readuser))
route.get('/listaorcamento', eAdmin.logado, (read.readorca))

route.get('/contato', (req, res) => res.render("index", { page: 'contato' }))
route.get('/orcamento', eAdmin.logado, (req, res) => res.render("index", { page: 'orcamento' }))
route.get('/login', (req, res) => res.render("index", { page: 'login' }))
route.get('/cadastrologin', eAdmin.logado, (req, res) => res.render("index", { page: 'cadastrologin' }))

route.post('/add', eAdmin.eAdmin, insert.orcamento)
route.post('/add2', eAdmin.eAdmin, insert.usuarios)
route.post('/cadastrar', eAdmin.eAdmin, insert.login)
route.post('/logar', login.login)
route.get('/logout', login.logout)
route.get('/listaorcamento/:id', eAdmin.eAdmin, deletar.deletepost)
route.get('/listaclientes/:id', eAdmin.eAdmin, deletar.deleteuser)
route.post('/email', email.email)

module.exports = route