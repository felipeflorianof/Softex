// Uma função tradicional com parâmetros e um retorno de valor;

var readline = require('readline-sync');
var n1 = parseFloat(readline.question('Numero 1: '));
var n2 = parseFloat(readline.question('Numero 2: '));

function subtrair(a, b){
    console.log(a - b);
    return;
};

subtrair(n1, n2);