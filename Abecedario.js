function solucao(letra, palavras) {
	//seu codigo aqui
    let perderam = 0;
    
    for(let palavra of palavras){
        if(palavra[0] != letra){
           perderam ++;
           }
    }
    
    console.log(perderam);
    
}