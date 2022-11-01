const express = require('express');
const app = express();

app.get("/listar/50", (req, res) => {
    res.status(404);
});

app.get("/listar/10", (req, res) => {
    res.status(200).send("Sucesso!");
});
