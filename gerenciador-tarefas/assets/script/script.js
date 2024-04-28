var addBtn = document.getElementById('addbtn');
var tabela = document.getElementById('tarefas');

addBtn.addEventListener("click", () => {
    let tituloData = document.getElementById('titulo').value;
    let descData = document.getElementById('descricao').value;
    if (tituloData != '' && descData != '') {
        criarLinha(tituloData, descData);
    } else {
        exibirMensagem();
    }
});

function criarLinha(t, d) {
    let novaLinha = document.createElement('tr');
    let novoTitulo = document.createElement('td');
    let novaDesc = document.createElement('td');
    let espacoBtn = document.createElement('td');
    let delBtn = document.createElement('button');
    novoTitulo.textContent = t;
    novaDesc.textContent = d;
    delBtn.textContent = 'Excluir';
    tabela.appendChild(novaLinha);
    novaLinha.appendChild(novoTitulo);
    novaLinha.appendChild(novaDesc);
    novaLinha.appendChild(espacoBtn);
    espacoBtn.appendChild(delBtn);
    delBtn.onclick = () => {
        novaLinha.parentNode.removeChild(novaLinha);
    }
}

function exibirMensagem() {
    let form = document.getElementById('gerenciador');
    let mensagem = document.querySelector('.msg');
    let voltarBtn = document.getElementById('voltarbtn');
    form.setAttribute('fading', '');
    form.addEventListener('animationend', () => {
        form.removeAttribute('fading');
        form.style.display = 'none';
        mensagem.style.display = 'block';
    }, {once: true});
    voltarBtn.onclick = () => {
        mensagem.setAttribute('fading', '');
        mensagem.addEventListener('animationend', () => {
            mensagem.removeAttribute('fading');
            mensagem.style.display = 'none';
            form.style.display = 'flex';
        }, {once: true});
    }
}

