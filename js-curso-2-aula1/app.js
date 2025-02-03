let lista = [];
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
function exibirTextoNaTela(tag) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um numrro de 1 a 10');
    
} 


function verificarChute() {
    console.log(numeroSecreto);
    
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
            if (chute > numeroSecreto) { exibirTextoNaTela ('p', '0 número secreto é menor');
            } else {
                    exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}

function gerarNumeroSecreto(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosDaLista = lista.length;
    if (lista.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    } else {
        lista.push()
        return numeroEscolhido
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
