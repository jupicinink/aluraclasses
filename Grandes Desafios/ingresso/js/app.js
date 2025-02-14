function comprar() {
    // pegando o tipo e a quantidade
    let tipo = document.getElementById('tipo-ingresso').value; 
    let qtd = parseInt(document.getElementById('qtd').value);
    console.log(tipo);

    if(tipo == 'pista'){
        comprarPista(qtd)
        
    } else if(tipo == 'superior') {
        compraSuperior(qtd)
    } else {
        comprarInferior(qtd);
    }

}

function comprarPista(qtd){
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > pista){
        alert('Quantidade indisponivel para tipo de pista')
    } else {
        pista = pista - qtd;
        document.getElementById('qtd-pista').textContent = pista
        alert('Compra realizada com sucesso')
    }
   
    
}
function compraSuperior(qtd){
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > superior){
        alert('Quantidade indisponivel para tipo de pista')
    } else {
        superior = superior - qtd;
        document.getElementById('qtd-superior').textContent = superior
        alert('Compra realizada com sucesso')
    }
   
    
}

function comprarInferior(qtd){
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > inferior){
        alert('Quantidade indisponivel para tipo de pista')
    } else {
        inferior = inferior - qtd;
        document.getElementById('qtd-inferior').textContent = inferior
        alert('Compra realizada com sucesso')
    }
   
    
}