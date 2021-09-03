const database = require('./db')
const Orcamento = database.sequelize.define('orcamento', {
        peca: {
            type: database.Sequelize.STRING
        },
        compras: {
            type: database.Sequelize.FLOAT
        },
        quantidade: {
            type: database.Sequelize.INTEGER
        },
        lucro: {
            type: database.Sequelize.FLOAT
        },
        venda: {
            type: database.Sequelize.FLOAT
        },
        maodeobra: {
            type: database.Sequelize.FLOAT
        },
        servicos: {
            type: database.Sequelize.STRING
        }
    })
    // Orcamento.sync({ Force: true })
const Usuarios = database.sequelize.define('usuarios', {
        nome: {
            type: database.Sequelize.STRING
        },
        email: {
            type: database.Sequelize.STRING
        },
        cpf: {
            type: database.Sequelize.FLOAT
        },
        telefone: {
            type: database.Sequelize.FLOAT
        },
        nascimento: {
            type: database.Sequelize.DATEONLY
        },
        sexo: {
            type: database.Sequelize.STRING
        },
        endereco: {
            type: database.Sequelize.STRING
        },
        cidade: {
            type: database.Sequelize.STRING
        },
        estado: {
            type: database.Sequelize.STRING
        },
        cep: {
            type: database.Sequelize.FLOAT
        },
        senha: {
            type: database.Sequelize.STRING
        },
        confirma: {
            type: database.Sequelize.STRING
        }
    })
    // Usuarios.sync({ Force: true })
module.exports = {
    Orcamento: Orcamento,
    Usuarios: Usuarios
}