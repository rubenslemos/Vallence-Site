const listar = require('./CreateTables')
const listOrcamento = listar.Orcamento
const listCliente = listar.Usuarios
module.exports = {
    async exibirOrcamento(req, res) {
        exibirOrcamento = await listOrcamento.findOne({ where: { 'id': req.params.id } })
            .then((exibirOrcamento) => {
                res.render('index', { page: 'editarOrcamento', exibirOrcamento: exibirOrcamento })
            }).catch((err) => {
                res.redirect('/listaorcamento')
            })
    },
    async editarOrcamento(req, res) {
        await listOrcamento.update({
                peca: req.body.peca,
                compras: req.body.compras,
                quantidade: req.body.quantidade,
                lucro: req.body.lucro,
                venda: req.body.venda,
                maodeobra: req.body.maodeobra,
                servicos: req.body.servicos
            }, { where: { 'id': req.body.id } })
            .then(() => {
                res.redirect("/listaorcamento")
            }).catch((err) => {
                res.redirect("/listaorcamento")
            })

    },
    async exibirCliente(req, res) {
        exibirCliente = await listCliente.findOne({ where: { 'id': req.params.id } })
            .then((exibirCliente) => {
                res.render('index', { page: 'editarCliente', exibirCliente: exibirCliente })
            }).catch((err) => {
                res.redirect('/listaclientes')
            })
    },
    async editarCliente(req, res) {
        await listCliente.update({
                nome: req.body.nome,
                email: req.body.email,
                cpf: req.body.cpf,
                telefone: req.body.telefone,
                nascimento: req.body.nascimento,
                sexo: req.body.sexo,
                endereco: req.body.endereco,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cep: req.body.cep
            }, { where: { 'id': req.body.id } })
            .then(() => {
                res.redirect("/listaclientes")
            }).catch((err) => {
                res.redirect("listaclientes")
            })
    }
}