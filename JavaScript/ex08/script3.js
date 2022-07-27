// Uma arrow function com parâmetros e que retorne um valor;

var readline = require('readline-sync');
var n1 = parseFloat(readline.question('Digite um numero: '));
var n2 = parseFloat(readline.question('Digite outro numero: '));

const multiplication = (x, y) => {
    console.log(x * y);
    return;
};

multiplication(n1, n2);