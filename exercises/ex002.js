const readLine = require('readline-sync');
const word = readLine.question('Digite uma palavra para ver se ela é um palíndromo: ');
function inverterWord(palavra) {
    const palavraDividida = palavra.split('');
    const palavraInversa = palavraDividida.reverse().join('');
    return palavraInversa === palavra;
}

console.log(inverterWord(word));