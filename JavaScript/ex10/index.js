var express = require('express');
const app = express();

app.get("/", function(request,response){
    response.send("Hello, Felipe Floriano!");
});

app.get("/about", function(request, response){
    response.send("Empty your mind. Be formless, shapeless, like water.");
});

app.listen(8081, function(){
    console.log("Servidor rodando na URL localhost:8081");
});

//o express é um framework orientado á rotas

// app.listen(8081) - Criando servidor com express. Sempre bom ser o último código da aplicação.

// A vírgula com a function() indica um 'Callback' - Função que é executada sempre que um evento acontece.