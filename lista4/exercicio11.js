// function calcularmedia(md) {
//     var media = 0;

//     for (var i = 0; i < md.length; i++) {
//         media += md[i] / md.length;
// }
// return media
// }
// var lista1 = [1, 2, 4, 5, 7, 8, 10, 11]
// console.log(calcularmedia(lista1));

// var lista2 = [10, 70, 30, 50]
// console.log(calcularmedia(lista2));

// var lista3 = [29, 567, 38, 53, 503, 92, 67, 909, 203, 382, 28]
// console.log(calcularmedia(lista3));

// var lista4 = []
// console.log(calcularmedia(lista4));
const lista = [1, 2, 3, 4, 5]
function soma(a, b){
    return a + b /lista.length;
}
const total = lista.reduce(soma, 0);
console.log(total)