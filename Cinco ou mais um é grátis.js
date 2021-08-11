function solucao(precos) {
    //seu codigo aqui
  let valorFinal = 0;

  for(let preco of precos){
    valorFinal += preco;
  }

  if(precos.length >= 5){
    
    let maisBarato = precos[0];

    for(let preco of precos){
      if(preco < maisBarato){
        maisBarato = preco;
      }
    }
    console.log(valorFinal - maisBarato);
  
  }else{
    console.log(valorFinal);
  }
}
