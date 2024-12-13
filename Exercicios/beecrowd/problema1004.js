var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var valor1 = lines[0]
var valor2 = lines[1]
var PROD = valor1 * valor2

console.log("PROD" + " = " + PROD)