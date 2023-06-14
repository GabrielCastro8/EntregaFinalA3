const db = require("../config/conexao");

class Filme{
    adicionar(filme){
        filme.status = "marcado";
        filme.observacoes = "";

        const sql = `INSERT INTO filmes(nome, recomendo, plataforma, status, observacoes) VALUES('${filme.nome}','${filme.recomendo}', '${filme.plataforma}', '${filme.status}', '${filme.observacoes}')`;

        db.run(sql);
    }

    remover(filme){
        const sql = `DELETE FROM filmes WHERE nome= '${filme}'`;
        console.log(filme)
        db.run(sql);
    }
}

module.exports = new Filme();