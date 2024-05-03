const addBtn = document.getElementById('addbtn');
const tBody = document.querySelector('tbody');

addBtn.addEventListener('click', () => {
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
    let checkBtn = document.createElement('button');
    novoTitulo.textContent = t;
    novaDesc.textContent = d;
    delBtn.textContent = 'Excluir';
    checkBtn.textContent = 'Em andamento';
    tBody.appendChild(novaLinha);
    novaLinha.appendChild(novoTitulo);
    novaLinha.appendChild(novaDesc);
    novaLinha.appendChild(espacoBtn);
    espacoBtn.appendChild(checkBtn);
    espacoBtn.appendChild(delBtn);
    delBtn.onclick = () => {
        tBody.removeChild(novaLinha);
    }
    checkBtn.onclick = () => {
        if (checkBtn.textContent == 'Em andamento') {
            novoTitulo.style.textDecoration = 'line-through';
            novaDesc.style.textDecoration = 'line-through';
            checkBtn.textContent = 'Concluída';
        } else {
            novoTitulo.style.textDecoration = 'none';
            novaDesc.style.textDecoration = 'none';
            checkBtn.textContent = 'Em andamento';
        }
    }
}

function exibirMensagem() {
    const form = document.getElementById('gerenciador');
    const mensagem = document.querySelector('.msg');
    const voltarBtn = document.getElementById('voltarbtn');
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

