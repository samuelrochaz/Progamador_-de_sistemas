function encontrarPrimo(np) {
    if (np < 2) return "false";
    for (var div = 2; div < np; div++) {
        if (np % div === 0) {

            return "false"
        }
        return "true"
    }
}
console.log(encontrarPrimo(7));
console.log(encontrarPrimo(10));
console.log(encontrarPrimo(13));
console.log(encontrarPrimo(0));
console.log(encontrarPrimo(1));
console.log(encontrarPrimo(2));
console.log("========")
console.log(encontrarPrimo(327));
console.log(encontrarPrimo(847));
console.log(encontrarPrimo(1573));
console.log(encontrarPrimo(31));
console.log(encontrarPrimo(-3));
console.log(encontrarPrimo(-31));