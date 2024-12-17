function contarVogais(xx) {
    const vogais = ["a", "e", "i", "o", "u"]
    const sep = xx.split('')
    const vogl = sep.filter(letras => vogais.includes(letras))

return vogl.length;
// const letras = aa.filter(contarVogais) 
// separar todas as letras uma das outras 
// transformar em array
//comparar as letras com as vogais
// filtrar as vogais que sao iguais as da lista e contar as vogais
}
 console.log(contarVogais("javascript" ) +" vogais")