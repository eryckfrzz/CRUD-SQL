const conexao = require('../infraestrutura/conexao')

class atendimentoModel{
    listar(){
        const sql = 'select * from atendimentos';
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
                if(error){
                    console.log('deu erro ao listar!')
                    reject(error)
                }
                console.log('listagem bem sucedida!')
                resolve(resposta)
            })
        })
    };

    criar(novoAtendimento){
        const sql = 'insert into atendimentos set ?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, novoAtendimento, (error, resposta) => {
                if(error){
                    console.log('deu erro ao criar um novo atendimento!')
                    reject(error)
                }
                console.log('criado com sucesso!')
                resolve(resposta)
            })
        })
    };

    atualizar(atendimentoAtualizado, id){
        const sql = 'update atendimentos set ? where id = ?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, [atendimentoAtualizado, id], (error, resposta) => {
                if(error){
                    console.log('deu erro ao criar um novo atendimento!')
                    reject(error)
                }
                console.log('criado com sucesso!')
                resolve(resposta)
            })
        })
    };

    deletar(id){
        const sql = 'delete from atendimentos where id = ?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, resposta) => {
                if(error){
                    console.log('deu erro ao deletar o contato!')
                    reject(error)
                }
                console.log('contato deletado com sucesso!')
                resolve(resposta)
            })
        })
    };
};

module.exports = new atendimentoModel()