// Uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;

var readline = require('readline-Sync');
var n1 = parseFloat(readline.question('Numero 1: '));
var n2 = parseFloat(readline.question('Numero 2: '));

function somar(){
    console.log(n1 + n2);
    return;
}

somar();