function calcular(lista) {
    var soma = 0;

    for (var i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma;
}

var lista1 = [1, 2, 3, 4, 5];
console.log(calcular(lista1));

var lista2 = [2, 4, 6, 8];
console.log(calcular(lista2));

var lista3 = [1, 3, 5, 7];
console.log(calcular(lista3));