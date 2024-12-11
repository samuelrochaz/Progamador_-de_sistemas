const str = "3 7 9 10 13";
const lines = str.split(' ').map(Number);

function soma(a, b) {
    return a + b / lines.length;
}
const total = lines.reduce(soma, 0);
console.log(total)