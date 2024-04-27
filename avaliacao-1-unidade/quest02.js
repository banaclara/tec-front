var intList = [];

while (intList.length < 10) {
    let novoNumero = prompt("Digite um número inteiro: ");
    intList.push(parseInt(novoNumero));
}

function parOuImpar(lista) {
    var par = 0;
    var impar = 0;
    for (var i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            par++;
        } else {
            impar++;
        }
    }
    console.log("Existem " + par + " números pares na lista.");
    console.log("Existem " + impar + " números ímpares na lista.");
}

parOuImpar(intList);