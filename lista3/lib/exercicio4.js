function Menor (n1, n2, n3) {
    let menor = n1;

    if (n2 < menor) menor = n2;
    if (n3 < menor) menor = n3;
    
    return menor;
}
console.log(Menor(3, 7, 5));
console.log(Menor(-1, -5, -3));
console.log(Menor(8, 2, 10));