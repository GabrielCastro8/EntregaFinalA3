const db = require("../config/conexao");

class Plataforma{
    adicionar(plataforma){
    
        const sql = `INSERT INTO plataformas(nome) VALUES('${plataforma.nome}')`;

        db.run(sql);
    }

    remover(plataforma){
        const sql = `DELETE FROM plataformas WHERE nome= '${plataforma}'`;
        console.log(plataforma)
        db.run(sql);
    }
}

module.exports = new Plataforma();