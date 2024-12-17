//lista4 - exercicio13
export function Maior(lista) {
    var resu = Math.max(...lista)

    return resu
}
//lista4 - exercicio9
export function somaLista(lista) {
   return lista.reduce(soma, 0)
}
// lista2 - exercicio3
export function soma (p1, p2) {
   var total = (p1 + p2);  
     
    return total;
   }
// lista4 - exercicio19
export function verificaranagrama(xx, yy) {
    var palavra = xx.split('').sort().join('');
    
    var texto = yy.split('').sort().join('');
    
    if (texto === palavra) {
        
        return true
    }
    return false
}
// lista4 - exercicio16
export function verificarpalindromo(texto) {
    let aa = texto.split('').reverse().join('');
    if (aa === texto) {
        return true
    }
    return false
}
// lista4 - exercicio16
export function somaPar(lista) {
    var soma = 0;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            soma += lista[i];
        }
    }
    return soma;
}
