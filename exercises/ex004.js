const array = [8, 6, 3, 2, 9];
let numOutArray = 0;

const arrayModificada = array.join(',');
array.forEach(item => {
    numOutArray += `${item},`;
   
})
console.log(Math.max(numOutArray));



// console.log(Math.max(1, 2, 4, 3))