function separar (texto,separador) {
return texto.split(separador); 
}

console.log(separar("O rato roeu a roupa do rei de Roma", " "));//cenario1
console.log(separar("JavaScript é muito fácil!", " "));//cenario2
console.log(separar("Eu gosto de programar", " "))//cenario3
console.log(separar("João,Maria,José", ","));//cenario4
console.log(separar("Ana Maria,Paulo Coelho,Carla",","));//cenario5
console.log(separar("fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com", "."));//cenario6
console.log(separar("contato@empresa.com;suporte@site.com", "."));//cenario7
console.log(separar("admin@fundacao.org;info@site.org", "."));//cenario8
console.log(separar("Nome -- Sobrenome -- Idade -- País", " -- "));//cenario9
console.log(separar( "Item 1 -- Item 2 -- Item 3 -- Item 4", " -- "));//cenario10
console.log(separar("Rua A -- Bairro B -- Cidade C -- Estado D", " -- "));//cenario11
console.log(separar("/usr/local/bin", "/"));//cenario12
console.log(separar("/home/user/documents", "/"));//cenario13
console.log(separar("/var/www/html", "/"));//cenario14
console.log(separar("JavaScript", ""));//cenario15
console.log(separar("Eu gosto de programar", ""));//cenario16
console.log(separar("Olá, Mundo!", ""));//cenario17
console.log(separar("O sol está brilhando. O céu está azul. É um ótimo dia!", ". "));//cenario18
console.log(separar("Programar é divertido. Pratique todos os dias.", ". "));//cenario19
console.log(separar("Olá. Como vai você?", ". "));//cenario20
console.log(separar("15/08/2024", "/"));//cenario21
console.log(separar("01/01/2020", "/"));//cenario22
console.log(separar("31/12/1999", "/"));//cenario23
console.log(separar("14:35:20",":"));//cenario24
console.log(separar("09:05:15",":"));//cenario25
console.log(separar("23:59:59",":"));//cenario26

console.log("questão10");
console.log(separar("Primeira linha\nSegunda linha\nTerceira linha", "\n"));//cenario27
console.log(separar("Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore.","\n"));//cenario28
console.log(separar("Linha única sem quebras", ));//cenario29
console.log(separar(`Primeira linha de um texto. 
Segunda linha usando template strings. 
Terceira linha com mais detalhes.`," \n"));//cenario30
console.log(separar(` 
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit. 
  Ut enim ad minim veniam.`," \n"));//cenario31
console.log(separar(` 
Texto com linhas múltiplas e 
uso de templates strings 
para separação. 
`," \n"));//cenario32