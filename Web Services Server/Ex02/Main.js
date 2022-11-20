/*
 * Faça um projeto explicando como funcionam os métodos HTTP com exemplos de requisições,
 * sua utilização e em qual momento cada um dos métodos devem ser utilizados.
 */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Método http get');
    // Essa é a requisição mais comum de todas. Através dessa requisição nós pedimos a representação de um recurso: que pode ser um arquivo html, xml, json, etc.
});

app.post('/', (req, res) => {
    res.send('Método http post');
    // O método POST é utilizado quando queremos criar um recurso. Quando usamos POST, os dados vão no corpo da requisição e não na URL.
});

app.put('/', (req, res) => {
    res.send('Método http put');
    // Requisita que um recurso seja "guardado" na URL fornecida. Se o recurso já existir, ele deve ser atualizado. Se não existir, pode ser criado.
});

app.delete('/', (req, res) => {
    res.send('Método http delete');
    // Exclui o recurso especificado.
});


app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081');
})


/*
 * Descreva o que é WSDL, seu significado e sua função.
 * O que é? De forma bem breve WSDL é uma notação XML para descrever um serviço da web.
 * Seu Significado: Web Services Description Language
 * Sua função: Descrever serviços de rede como um conjunto de terminais operando em mensagens contendo informações orientadas a documentos ou a procedimentos.
 */



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