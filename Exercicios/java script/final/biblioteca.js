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
// lista4 - exercicio10
export function verificaPar(nm) {
    return nm % 2 === 0 
}
export function somaPares (lista) {
    var numpar = lista.filter(verificaPar)
    return somaLista(numpar)
}

// lista3 - exercicio2
export function imparOupar(nm) {
    return verificaPar(nm) ? "par": "Impar"
}

// lista4 - exercicio12
export function somarDigito(numero) {
    var digito = numero.toString().split('')
    var soma = somaLista(digito)
    // var soma = 0;
    // for (var i = 0; i < list.length; i++) {
    //     soma += Number(aa[i]);
     return soma
}
