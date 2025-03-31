//IMplementei colocando não so uma array pronta na função, mas a possibilidade de o usuario montar a array.

const readLines = require('readline-sync');
let arrayUser = [];

let resposta = readLines.question('Você quer adicionar um númeor a array?');
while(resposta.toUpperCase() === 'SIM' || resposta.toUpperCase() === 'S') {
    const number = +readLines.question('Digite um número para a array:');
    arrayUser.push(number);
    resposta = readLines.question('Você quer adicionar um númeor a array?');
}



function somandoArray(array) {
    let totalArray = 0;
    array.forEach(item => {
        totalArray += item;
    })
    return `A soma dos itens dessa array é ${totalArray}`;
}
console.log(somandoArray(arrayUser));