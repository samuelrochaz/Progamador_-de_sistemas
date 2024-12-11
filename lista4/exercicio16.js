function palindromo(xx) {
    let aa = xx.split('').reverse().join('');
    if (aa === xx) {
        return true
    }
    return false
}
console.log(palindromo("racecar"));
console.log(palindromo("hello"));
console.log(palindromo("madam"));