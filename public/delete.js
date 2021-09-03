const express = require('express')
const insert = require('./CreateTables')
const read = require('./read')
const route = require('./route')

module.exports = {
    async deletepost(req, res) {
        deletepost = await insert.Orcamento.destroy({
            where: { 'id': req.params.id }
        }).then(() =>
            res.redirect('/listaorcamento')
        ).catch((erro) =>
            res.send('Esta postagem não existe!')
        )
    },
    async deleteuser(req, res) {
        deleteuser = await insert.Usuarios.destroy({
            where: { 'id': req.params.id }
        }).then(() =>
            res.redirect('/listaclientes')
        ).catch((erro) =>
            res.send('Esta postagem não existe!')
        )
    }
}