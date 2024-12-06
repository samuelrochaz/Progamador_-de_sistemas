var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split();
console.log(lines);
var N = lines[0]
console.log(N);
var segundo = N % 60 ;
var minuto = Math.floor(N / 60) % 60;
var hora = Math.floor(N / 3600);   

console.log(hora + ":" + minuto + ":" + segundo);