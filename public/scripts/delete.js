const express = require('express')
const insert = require('./CreateTables')
const route = require('./route')
const deletepost = (req, res) => {
    insert.Orcamento.destroy({
        where: { 'id': req.params.id }
    }).then(() =>
        res.redirect('/delete')
    ).catch((erro) =>
        res.send('Esta postagem não existe!')
    )
}
const deleteuser = (req, res) => {
    insert.Usuarios.destroy({
        where: { 'id': req.params.id }
    }).then(() =>
        res.redirect('/delete')
    ).catch((erro) =>
        res.send('Esta postagem não existe!')
    )
}
module.exports = {
    deletepost: deletepost,
    deleteuser: deleteuser
}