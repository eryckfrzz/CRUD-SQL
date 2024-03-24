class tabelas{
    init(conexao){
        this.conexao = conexao;
        this.createTableAtendimentos();
    }

    createTableAtendimentos(){
        const sql = 
        `
        create table if not exists atendimentos(
            id int not null auto_increment primary key,
            data date,
            servico varchar(100),
            cliente varchar(100),
            status enum('ativo', 'realizado', 'cancelado') default 'ativo'
            );
        `;
        this.conexao.query(sql, (error) => {
            if(error){
                console.log('erro na hora de criar a tabela!')
                console.log(error.message)
                return
            };

            console.log('tabela criada com sucesso!')

        });
        
    };
};

module.exports = new tabelas();