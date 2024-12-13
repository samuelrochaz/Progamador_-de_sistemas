var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');

console.log(Math.max(...lines))