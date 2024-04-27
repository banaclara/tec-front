var sal95 = 1000;

function progressaoDeAumento(salInicial, anoAtual) {
    let aumento = 0.015;
    let salario = salInicial + (salInicial * aumento)

    for (var ano = 1997; ano <= anoAtual; ano++) {
        aumento *= 2;
        salario = salario + (salario * aumento);
        if (!isNaN(salInicial)) {
            console.log("Ano: " + ano + "; Aumento: " + aumento * 100 + "%" + "; Salário: " + salario);
        }
    }
}

progressaoDeAumento(sal95, 2024);

var salarioF = parseInt(prompt("Salário inicial do funcionário: "));

progressaoDeAumento(salarioF, 2024);