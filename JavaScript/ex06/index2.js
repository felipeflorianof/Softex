var readlineSync = require('readline-Sync');

var nota1 = parseFloat(readlineSync.question('Primeira nota: '));
var nota2 = parseFloat(readlineSync.question('Segunda nota: '));
var nota3 = 0;
var media = (nota1 + nota2 + nota3) / 3;

for(let c = 0; media < 7; c++){
    nota3 += 1;
    media = (nota1 + nota2 + nota3) / 3;
}

console.log(`Você precisa de ${nota3} pontos pra ser aprovado. Considerando a média 7.`);