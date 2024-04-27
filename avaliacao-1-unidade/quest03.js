var tamanhoLista = prompt("Quantidade de números na lista: ");
var intList = [];

while (intList.length < tamanhoLista) {
    let novoNumero = prompt("Digite um número inteiro: ");
    intList.push(parseInt(novoNumero));
}

function maiorMenorESoma(lista) {
    let maior = lista[0];
    let menor = lista[0];
    let soma = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
        soma += lista[i];
    }

    console.log("Maior número da lista: " + maior);
    console.log("Menor número da lista: " + menor);
    console.log("Soma dos valores na lista: " + soma);
}

maiorMenorESoma(intList);