var raio = parseFloat(prompt("Raio do círculo: "));

function areaCirculo(r) {
    let area = Math.PI * r * r;
    return area;
}

function perimetroCirculo(r) {
    let perimetro = 2 * Math.PI * r;
    return perimetro;
}

console.log("A área do círculo é " + areaCirculo(raio))
console.log("O perímetro do círculo é " + perimetroCirculo(raio))