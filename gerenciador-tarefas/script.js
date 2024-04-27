var addBtn = document.getElementById("addbtn");
var tabela = document.getElementById("tarefas");
var tituloCol = document.getElementById("titulo");
var descCol = document.getElementById("descricao");

addBtn.addEventListener("click", () => {
    let novaLinha = document.createElement("tr");
    let novoTitulo = document.createElement("td");
    let novaDesc = document.createElement("td");
    let espacoBtn = document.createElement("td");
    let delBtn = document.createElement("button");
    novoTitulo.textContent = document.getElementById("titulo").value;
    novaDesc.textContent = document.getElementById("descricao").value;
    delBtn.textContent = "Excluir";
    tabela.appendChild(novaLinha);
    novaLinha.appendChild(novoTitulo);
    novaLinha.appendChild(novaDesc);
    novaLinha.appendChild(espacoBtn);
    espacoBtn.appendChild(delBtn);
    delBtn.onclick = () => {novaLinha.parentNode.removeChild(novaLinha)};
});