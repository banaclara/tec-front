function investimento(capInicial, meses, taxa) {
    taxa /= 100;
    let montante = capInicial * (1 + taxa) ** meses;
    return parseFloat(montante.toFixed(2));
}

var capital = parseFloat(prompt("Capital investido:"));
var juros = parseFloat(prompt("Taxa de juros (%):"));
var tempo = parseInt(prompt("Tempo do investimento em meses:"));

console.log("Montante final após " + tempo + " meses a " + juros + "% de juros: " + investimento(capital, tempo, juros))