function Maior(lista) {
    var resu = Math.max(...lista)

    return resu
}

console.log(Maior([1, 2, 3, 4, 5]));
console.log(Maior([-1, -2, -3, -4, -5]));
console.log(Maior([10, 20, 30, 40, -50]));
console.log(Maior([]));