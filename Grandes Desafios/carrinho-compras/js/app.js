let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').textContent = 'R$0'
function adicionar(){
   // pegando os valores
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidae = document.getElementById('quantidade').value;
    // sepando o nome e o preço
    let nomeProduto = produtoSelecionado.split('-')[0]
    let valorUnitario = produtoSelecionado.split('R$')[1]
   // carrinho  
    let preco = quantidae * valorUnitario;
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidae}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`
          
    totalGeral = totalGeral + preco
    let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent = `R$ ${totalGeral}`
    document.getElementById('quantidade').value = 0
    
}

function limpar() {
totalGeral = 0;
document.getElementById('valor-total').textContent = 'R$0'
document.getElementById('lista-produtos').innerHTML = ''
}