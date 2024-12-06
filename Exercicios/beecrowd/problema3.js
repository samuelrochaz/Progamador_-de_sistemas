var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split();
var raio = lines[0];
var n = 3.14159;
var area = n * (raio * raio);

console.log("A=" + area.toFixed(4));