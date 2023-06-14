const Filme = require('../models/filme');
const db = require('../config/conexao');

module.exports = app=>{
    
    app.get('/filmes', (req, res) => {
        db.all('SELECT * FROM filmes', (err, rows) => {
          if (err) {
            console.error(err.message);
            res.status(500).send('Erro controller filme');
          } else {
            res.json(rows);
          }
        });
      });

    app.post('/filmes', (req, res) => {
        const filme = req.body;
        Filme.adicionar(filme);
        res.send('Filme salvo com sucesso!');
    });

    app.delete('/filmes/:nome', (req,res) =>{
      const {nome} = req.params;
      Filme.remover(nome);
    });
} 

