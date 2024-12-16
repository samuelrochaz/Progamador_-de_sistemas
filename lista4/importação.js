export function verificaranagrama(xx, yy) {
    var palavra = xx.split('').sort().join('');
    
    var texto = yy.split('').sort().join('');
    
    if (texto === palavra) {

        return true
    }
    return false
}

function verificarpalindromo(xx) {
    let aa = xx.split('').reverse().join('');
    if (aa === xx) {
        return true
    }
    return false
}

export default { verificaranagrama, verificarpalindromo }; 