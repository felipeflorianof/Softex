/**
 *  Um objeto com, no mínimo, três propriedades;
 *  Um array de tamanho três no mínimo;
 */

let user = {
email: 'felipeteste@gmail.com',
password: 1423,
acessdate: '12/08/2022'
};

var vetor = [
    '\nFelipe',
    'Monitor',
    'Headphone', 
    'PC',
    4000
]; 

// duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.

function listapropriedades(){
    for (const user1 in user){
        console.log(`${user1}:${user[user1]}`);
    };
};

function listaelementos(){
    for(const test of vetor){
        console.log(test);
    };
};

listaelementos();
listapropriedades();