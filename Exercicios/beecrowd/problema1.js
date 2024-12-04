const { match } = require('assert');

var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' '); 

var A = Number(lines[0]) ;
var B = Number(lines[1]);
var C = Number(lines[2]);

var maior = Math.max(A,B,C);


console.log(maior + " eh o maior");