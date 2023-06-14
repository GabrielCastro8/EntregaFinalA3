module.exports = app=>{
    app.get('/usuario', (req, res) => res.send('Rota de usuarios!'));
} 