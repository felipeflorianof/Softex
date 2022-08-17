var readlineSync = require('readline-Sync');

var nota1= parseFloat(readlineSync.question('Primeira nota: '));
var nota2= parseFloat(readlineSync.question('Segunda nota: '));
var nota3= parseFloat(readlineSync.question('Terceira nota: '));
var media = (nota1 + nota2 + nota3) / 3;

return media >=7 ? console.log(`Aprovado com média ${media}`) : console.log(`Reprovado com média ${media}`);