function Maior (n1, n2, n3) {
    let maior = n1;
    //comparar o primeiro numero com o segundo
    if (n2 > maior) {
        maior = n2;
    }
    if (n3 > maior) {
        maior = n3;
    }
    return maior;
}
console.log(Maior(3, 7, 5));
console.log(Maior(-1, -5, -3));
console.log(Maior(8, 2, 10));