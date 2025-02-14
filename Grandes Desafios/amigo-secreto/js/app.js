function adicionar(){
    lista = document.getElementById('lista-amigos');
    let nomes = document.getElementById('nome-amigo').value
    
    if(lista.textContent == ''){
        lista.textContent = nomes
    } else {
        lista.textContent = lista.textContent + ',' + nomes
    }

    document.getElementById('nome-amigo').value = ''

};