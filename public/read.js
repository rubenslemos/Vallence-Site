const express = require('express')
const read = require('./CreateTables')
module.exports = {
    async readorca(req, res) {
        readorca = await read.Orcamento.findAll()
            .then((readorca) =>
                res.render("index", { page: 'listaorcamento', readorca: readorca })
            )

    },
    async readuser(req, res) {
        readuser = await read.Usuarios.findAll()
            .then((readuser) =>
                res.render("index", { page: 'listaclientes', readuser: readuser })
            )
    }
}