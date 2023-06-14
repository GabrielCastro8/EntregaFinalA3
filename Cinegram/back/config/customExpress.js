const express = require('express');

const consign = require('consign');

const cors = require('cors');

const routes = require('../routes');

module.exports = () =>{

    const app= express();

    app.use(express.urlencoded({
        extended :true
    }));
    app.use(express.json());

    app.use(cors({
        origin: '*'
    }));

    app.use((req, res, next) =>{
        res.header("Access-Control-Allow-Origin", "*" );
        next();
    });

    app.use(routes);

    //indicando por express importar o controller e ver se tem um app e se tem rotas ativas
    consign()
        .include('controllers')
        .into(app);

    return app;
}