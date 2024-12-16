import { Maior } from "../../lista4/exercicio13.js";
function Maiorde3 (n1, n2, n3) {
    let lista = [n1, n2, n3]
    return Maior(lista);
}


console.log("\n--> lista 3 <--")
console.log(Maiorde3(3, 7, 5));
console.log(Maiorde3(-1, -5, -3));
console.log(Maiorde3(8, 2, 10));