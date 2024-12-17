var lista1 = 123

function somar(lista) {
var aa = lista.toString().split('')
var soma = 0;
 for (var i = 0; i < aa.length; i++) {
    soma += Number(aa[i]);
}
return soma
}

console.log(somar(lista1));
var lista2 = 456789
console.log(somar(lista2));
var lista3 = 8423416542984721
console.log(somar(lista3));

