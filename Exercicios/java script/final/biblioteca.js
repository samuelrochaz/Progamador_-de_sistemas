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
    var soma = 0;
    for (var i = 0; i < digito.length; i++) soma += Number(digito[i]);
     return soma
}
// lista4 - exerciciio11
export function Mediaarray(num){
    var media = num.reduce((a, b, Index, lista) => a + b  / lista.length);
    return media.toFixed(1)
}

//lista4 exercicio15
export function reverso(xx) {
    var aa = xx.split('').reverse().join('');
    return aa 
}

//lista4 - exercicio17
export function verificarString (xx) {
    return !isNaN(xx)
}

//lista4 - exercicio18
export function contarVogais(xx) {
    const vogais = ["a", "e", "i", "o", "u"]
    const sep = xx.split('')
    const vogl = sep.filter(letras => vogais.includes(letras))
    
    return vogl.length;
    
}

//lista3 - exercicio1
export function avaliarmedia(media) {
    if (media >= 7.0){
        return "Aprovado"
    }
    
    return "Reprovado"
}

//lista3 - exercicio3
export function neg_pos(n_ou_p) {
    if (n_ou_p > 0){
        return "Positivo"
    }
    if (n_ou_p == 0){
        return "Zero"
    }
    return "Negativo"
}

//lista3 - exercicio4
export function Menor (n1, n2, n3) {
    let menor = n1;
    
    if (n2 < menor) menor = n2;
    if (n3 < menor) menor = n3;
    
    return menor;
}


//lista3 - exercicio5
export function Maiordetds (n1, n2, n3) {
    let lista = [n1, n2, n3]
    let num = Maior(lista);
    return num
}

//lista3 - exercicio6
export function multiplo (n1, n2) {
    
    return n2 !== 0 && n1 % n2 === 0;
}

//lista3 - exercicio7
export function verificarBissexto(ano) {
    if (ano % 400 === 0) return true;
    
    if (ano % 100 === 0) return false;
    
    if (ano % 4 === 0) return true;
    
    return "false"
}

//lista3 - exercicio8
export function verificarletra(letra) {
    if ('aeiou'.includes(letra)) {
        return "Vogal";
    } else {
        return "Consoante";
    }
}

//lista3 - exercicio14
export function tabuada(n){
    for(var k=0; k <= 10; k++) console.log(`${n} x ${k} = ${n*k}`);
    }

//lista3 - exercicio14
export function encontrarPrimo(np) {
    if (np < 2) return "false";
    for (var div = 2; div < np; div++) {
        if (np % div === 0) {

            return false
        }
        return true
    }
}

//lista2 - exercicio14
export function calcularPerimetro(x) {
    return parseFloat(x) * 2.0 * 3.14159;
}

//lista2 - exercicio15
export function temperatura (tmp) {
    return tmp * 9 / 5 + 32
}

//lista2 - exercicio16
export function calcularVolume(x) {
    let raio = parseFloat(x);
    const pi = 3.14159;
      let volume = (4/3) * pi * Math.pow(raio, 3);
      return volume.toFixed(4);
  }
