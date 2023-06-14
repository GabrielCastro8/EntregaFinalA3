const customExpress = require('./config/customExpress');
const conexao = require('./config/conexao');
const Tabelas = require('./config/tabelas');

Tabelas.init(conexao);

const app= customExpress();

app.listen(3000, ()=> console.log('Servidor rodando na porta 3000'));

app.get('/', (req, res) => res.send('Servidor rodando, tudo ok'));
