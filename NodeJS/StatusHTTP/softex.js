const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

let artigos = [
    { "titulo": "Primeiro Artigo", "Autor": "Felipe Floriano F."}
];

app.get("/listar/50", (req, res) => {
    res.status(404);
});

app.get("/listar/10", (req, res) => {
    res.status(200).send("Sucesso!");
});
