const readLine = require('readline-sync');//após instalado, o readline-sync pode ser chamado desse jeito. e dentro dele tem o método question que seria o input convencional
const frase = readLine.question('Digite uma frase/palavra: ');
const fraseArray = frase.split('');
const fraseInverso =  fraseArray.reverse().join('');
console.log('Resultado', fraseInverso);