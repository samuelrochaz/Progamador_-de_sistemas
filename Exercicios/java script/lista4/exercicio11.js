const lista = [1, 2, 3, 4, 5]
function soma(a, b){
    return a + b /lista.length;
}
const total = lista.reduce(soma, 0);
console.log(total)