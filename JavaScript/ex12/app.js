const express = require('express');
const app = express();

const db = require('./models/db'); // Importando a conexão feita no arquivo db.js

app.get('/', async (requesition, response) => {
    response.send('Essa é a página inicial');
});

app.listen(8081, () =>{
    console.log('Servidor iniciado na porta 8081 e na URL: http://localhost:8081');
});