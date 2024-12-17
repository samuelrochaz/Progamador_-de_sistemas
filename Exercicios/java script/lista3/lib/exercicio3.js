function verifique(n_ou_p) {
if (n_ou_p > 0){
    return "Positivo"
}
if (n_ou_p == 0){
    return "Zero"
}
 return "Negativo"
}
console.log(verifique(5));
console.log(verifique(-3));
console.log(verifique(0));
console.log(verifique(1110));
console.log(verifique(-987654321));