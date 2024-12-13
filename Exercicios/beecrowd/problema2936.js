var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');

var [curupira,boitata,boto,mapinguari,lara] = lines

console.log(curupira * 300 + boitata * 1500 + boto * 600 + mapinguari *1000 + lara * 150 + 225)