var fusca = {
    modelo:"fusca",
    cor:"preto",
    velocidade:0
}
function acelerar(carr) { 
carr.velocidade += 5
}
while(fusca.velocidade < 80)acelerar(fusca) ;


function freiar(carr) {
    fusca.velocidade -= 13;

    if(fusca.velocidade < 0){
        fusca.velocidade = 0;
   }
}
while(fusca.velocidade > 0)freiar()
    console.log(fusca.velocidade);
    acelerar(fusca); 
