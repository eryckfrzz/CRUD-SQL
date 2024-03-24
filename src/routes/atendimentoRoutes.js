const {Router} = require('express');
const routes = Router();
const atendimentoController = require('../../controllers/atendimentoController');

routes.get('/atendimentos', (req, res) => {
    const listaAtendimentos = atendimentoController.buscar()
    listaAtendimentos.then(atendimentos => res.status(200).json(atendimentos)).catch(error => res.status(400).json(error.message))
});

routes.post('/atendimentos', (req, res) => {
    const novoAtendimento = req.body
    const atendimento = atendimentoController.criar(novoAtendimento)
    atendimento.then(atendimentoCriado => res.status(200).json(atendimentoCriado)).catch(error => res.status(400).json(error.message))
});

routes.put('/atendimento/:id', (req, res) => {
    const {id} = req.params
    const atendimentoAtualizado = req.body
    const atendimento = atendimentoController.atualizar(atendimentoAtualizado, id)
    atendimento.then((resultAtendimentoAtualizado) => res.status(200).json(resultAtendimentoAtualizado)).catch((error) => res.status(400).json(error.message))
});

routes.delete('/atendimento/:id', (req, res) => {
    const {id} = req.params
    const deletado = atendimentoController.deletar(id)
    deletado.then((resultAtendimentoDeletado) => res.status(200).json(resultAtendimentoDeletado)).catch((error) => res.status(400).json(error.message))
});

module.exports = routes;