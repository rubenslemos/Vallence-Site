const Sequelize = require('sequelize')
const sequelize = new Sequelize('orcamentos', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'

})
sequelize.authenticate().then(function() {
    console.log("Conectado com Sucesso!")
}).catch(function(erro) {
    console.log("Falha ao conectar: " + erro)
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}