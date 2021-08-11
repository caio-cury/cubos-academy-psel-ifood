function solucao(produtos) {
	//seu codigo aqui
    let valorTotal = 0;
    let valorTop = 0;
    
    for(let produto of produtos){
        valorTotal += produto.preco;
        if(produto.preco > 10000){
            valorTop += produto.preco;
        }
    }
    
   let resultado = {
       totalTop: valorTop,
       percentual: valorTop/valorTotal
   }
   
   console.log(resultado);
}
