function verificarletra(letra) {
    if ('aeiou'.includes(letra)) {
        return "Vogal";
    } else {
     return "Consoante";
    }
}
console.log(verificarletra("a"));
console.log(verificarletra("b"));
console.log(verificarletra("e"));
console.log(verificarletra("x"));
console.log(verificarletra("y"));