const atendimentoModel = require('../models/atendimentoModel')

class atendimentoController{
    async buscar(){
        return atendimentoModel.listar()
    };

    async criar(novoAtendimento){
        return atendimentoModel.criar(novoAtendimento)
    };

    async atualizar(atendimentoAtualizado, id){
        return atendimentoModel.atualizar(atendimentoAtualizado, id)
    };

    async deletar(id){
        return atendimentoModel.deletar(id)
    };
};

module.exports = new atendimentoController();