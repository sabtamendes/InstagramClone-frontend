let cartas;


function perguntarCartas() {
    cartas = Number(prompt("Digite a quantidade de cartas que você quer jogar! Regra: Deverá ser somente números pares e apartir de 4 à 14 cartas!"));
    console.log(cartas)

    if (cartas % 2 === 1 || cartas < 4 || cartas > 14 || isNaN(cartas)) {
        perguntarInfinitamente();
    }
}
perguntarCartas();


function perguntarInfinitamente() {

    while (perguntarCartas()) {
        cartas = Number(prompt("Digite a quantidade de cartas que você quer jogar! Regra: Deverá ser somente números pares e apartir de 4 à 14 cartas!"));
    }
}

