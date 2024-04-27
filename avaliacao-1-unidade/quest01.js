var populacaoA = 80000;
var crescimentoAnualA = 0.03;
var populacaoB = 200000;
var crescimentoAnualB = 0.015;
var anos = 0;

while (populacaoB > populacaoA) {
    populacaoA += (populacaoA * crescimentoAnualA);
    populacaoB += (populacaoB* crescimentoAnualB);
    anos++;
}

console.log("Levará " + anos + " anos para a população do país A alcançar o número populacional do país B.")