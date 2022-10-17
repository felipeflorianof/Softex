const http = require('http');
const porta = process.env.PORT || 8081;

http.createServer(function(req, res){
    res.end('Hello There, fff made this code');
}).listen(porta);

console.log('Server online na porta '+porta);

