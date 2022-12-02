const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORTA = 8888;

let livros = [];

app.use(cors());

app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

app.listen(PORTA,() =>{
  console.log(`Servidor Iniciado na porta ${PORTA}`);
});


app.get('/book', function (req, res) {
    res.send(livros);
  });

app.post('/book', function (req, res) {
    const livro = req.body;

    console.log(livro);
    livros.push(livro);

    res.send(`Livro inserido com sucesso`);

  });

  app.post('/book/add', function (req, res) {
    const livro = req.body;

    console.log(livro);
    livros.push(livro);

    res.status(201).send(livro);

  });

  app.get('/book/ver/:id', (req, res)=>{
    let id = req.params.id;

    if (id > 0 && id <= livros.length){
        res.status(200).send(livros[id-1]);
    } 
    else {
        res.status(404).send("Livro não encontrado");
    }
  });

  app.get('/book/ver_todos', (req, res) =>{
    res.status(200).send(livros);
  })

  app.put('/book/editar/:id', (req, res)=>{
    let id = req.params.id;

    if (id > 0 && id <= livros.length){
        let livro = req.body;
        livros[id-1] = livro;
        res.status(200).send(livro);
    } 
    else {
        res.status(404).send("Livro não encontrado");
    }
  });

  app.delete('/book/remover/:id', (req, res)=>{
    let id = req.params.id;

    if (id > 0 && id <= livros.length){
        livros.splice(id-1,1);
        res.status(200).send('Livro Removido');
    } 
    else {
        res.status(404).send("Livro não encontrado");
    }
  });

  app.all('*', (req, res)=>{
    res.status(404).send("Página não encontrada");
  });