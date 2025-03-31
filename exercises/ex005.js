function vogaisString(string) {
    const stringMai = string.toUpperCase();
    const stringAlterada = stringMai.split('');
    let arrayVogais = []
    stringAlterada.forEach(letra => {
        if (letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
            arrayVogais.push(letra);   
        }
    })
    return `As vogais são: ${arrayVogais.join(', ')}`
}

console.log(vogaisString('antonio'));