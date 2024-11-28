var fusca = {
    modelo:"fusca",
    cor:"preto",
    velocidade:0,
    acelerar: function() {
        this.velocidade += 5
    } 
}

while(fusca.velocidade < 80) fusca.acelerar();
console.log("fusca acelerou a " + fusca.velocidade + " km/h");

//function freiar(carr) {
    //fusca.velocidade -= 13;

    //if(fusca.velocidade < 0){
        //fusca.velocidade = 0;
   //}
//}
//while(fusca.velocidade > 0)freiar()
    //console.log(fusca.velocidade);
    //acelerar(fusca); []