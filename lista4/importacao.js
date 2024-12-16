export function verificaranagrama(xx, yy) {
    var palavra = xx.split('').sort().join('');
    
    var texto = yy.split('').sort().join('');
    
    if (texto === palavra) {

        return true
    }
    return false
}

function verificarpalindromo(texto) {
    let aa = texto.split('').reverse().join('');
    if (aa === texto) {
        return true
    }
    return false
}

export default { verificaranagrama, verificarpalindromo }; 