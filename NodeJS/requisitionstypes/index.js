const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Método http get');
});

app.post('/', (req, res) => {
    res.send('Método http post');
});

app.put('/', (req, res) => {
    res.send('Método http put');
});

app.delete('/', (req, res) => {
    res.send('Método http delete');
});


app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081');
})

/* To execute, do this:

go to cmd, open this folder and write this

npm init
npm install
npm install express
npm install nodemon
nodemon index.js

then go to your favorite browser and type 'localhost:8081'

and it's done.

*/