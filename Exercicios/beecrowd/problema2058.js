var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');

console.log(Number(lines[0]) - 2);