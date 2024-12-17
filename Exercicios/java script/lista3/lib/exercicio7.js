function verificarBissexto(ano) {
    if (ano % 400 === 0) return true;

    if (ano % 100 === 0) return false;

    if (ano % 4 === 0) return true;

    return "false"
}
console.log(verificarBissexto(2020));
console.log(verificarBissexto(2024));
console.log(verificarBissexto(1999));
console.log(verificarBissexto(2014));
console.log(verificarBissexto(2025));
console.log(verificarBissexto(1900));