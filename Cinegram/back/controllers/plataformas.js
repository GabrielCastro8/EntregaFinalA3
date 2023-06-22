const Plataforma = require('../models/plataforma');
const db = require('../config/conexao');

module.exports = app=>{
    
    app.get('/plataformas', (req, res) => {
        db.all('SELECT * FROM plataformas', (err, rows) => {
          if (err) {
            console.error(err.message);
            res.status(500).send('Erro controller plataforma');
          } else {
            res.json(rows);
          }
        });
      });

    app.post('/plataformas', (req, res) => {
        const plataforma = req.body;
        Plataforma.adicionar(plataforma);
        res.send('Plataforma salvo com sucesso!');
    });

    app.delete('/plataformas/:nome', (req,res) =>{
      const {nome} = req.params;
      Plataforma.remover(nome);
    });
}