const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem vindo a sua página home');
});

app.get('/profile/:name', (req, res) => {
    res.send('Bem vindo a suas configuações de perfil ' + req.params.name);
})

app.get('/calculadora/:n1/:n2/:type', (req, res) => {

let n1 = parseInt(req.params.n1);
let n2 = parseInt(req.params.n2);
let type = parseInt(req.params.type);

    if(type == 1){
        console.log(n1 + n2);

    }else if(type == 2){
        console.log(n1 - n2);

    }else if(type == 3){
       console.log(n1 * n2);

    }else if(type == 4){
        console.log(n1 / n2);
    }

});

app.listen(8081, () => {
    console.log('Servidor rodando da URL: http://localhost:8081');
});
