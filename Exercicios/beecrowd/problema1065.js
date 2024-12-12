var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');

const par = lines.map(Number).filter((num) => num % 2 === 0)
const numeros = lines.length(par)
console.log(numeros + " valores pares")