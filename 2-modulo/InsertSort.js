
var vetor = [67, 5, 47, 61, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 127, 89, 71, 73, 79, 83, 97, 101, 103, 107, 109, 113, 3];
function insertionSort(vetor){
let atual;
for(let i = 1;  i<vetor.length; i++){
let j = i -1;
atual = vetor[i];
while(j >= 0 && atual < vetor[j]){
vetor[j+1] = vetor[j];
j--;
}
vetor[j+1] = atual;
}
return vetor;
}

console.log(insertionSort(vetor));
