class tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarFilmes();
    }

    criarFilmes(){
        //alt z
        const sql= 'CREATE TABLE IF NOT EXISTS filmes(id INTEGER PRIMARY KEY, nome varchar(50) NOT NULL, plataforma varchar(20), recomendo varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text)';

        this.conexao.serialize(() =>{
            this.conexao.run(sql);
        });
    }
}

module.exports = new tabelas;