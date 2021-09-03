const express = require('express')
const read = require('./CreateTables')
const readpost = (req, res) => {
    read.Postagem.findAll().then((postagem) => {
        res.render('post', { postagem: postagem })
    })
}
const readuser = (req, res) => {
    read.Usuario.findAll().then((users) => {
        res.render('usercad', { users: users })
    })
}
module.exports = {
    readpost: readpost,
    readuser: readuser
}