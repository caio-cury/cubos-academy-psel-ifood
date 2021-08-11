function solucao(ano) {
	//seu codigo aqui
    
    const quantosAnosFaltam = ano - 2020;
    
    if(quantosAnosFaltam % 2 !== 0){
        console.log("MEH");
    }else if((quantosAnosFaltam/2) % 2 == 0){
        console.log("JOGOS");
    }else{
        console.log("COPA")
    }
    
}