let cartas;
const parrots = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn']

function perguntarCartas() {
    cartas = Number(prompt("Digite a quantidade de cartas que você quer jogar! Regra: Deverá ser somente números pares e apartir de 4 à 14 cartas!"));
    // console.log(cartas)

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
//dividir o array em dois
// parrots = parrots.length / 2
function inserirCartas() {
    const ul = document.querySelector('.cardBoard');
    console.log(ul.innerHTML)
    ul.innerHTML += '';
    for(let i = 0; i < parrots.length; i++){
        ul.innerHTML += `<ul class="card">
        <li class="front">
            <img src="./assets/${parrots[i]}parrot.gif" alt="bobrossparrot">
        </li>
        <li class="back">
            <img src="./assets/back.png" alt="front">
        </li>
    </ul>`

    }
   
}
inserirCartas();


