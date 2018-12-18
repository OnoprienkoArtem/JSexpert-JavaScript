const btn = document.getElementById("play");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const winnerMessage = document.getElementById("result");

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function getNameById(result) {   
    if (result === 1) return 'ножницы';
    if (result === 2) return 'камень';
    if (result === 3) return 'бумага';
}

function determineWinner(resultOne, resultTwo) { 
    if (resultOne === resultTwo) {
        winnerMessage.innerHTML = 'ничья';
    } else if ((resultOne === 1 && resultTwo === 3) || (resultOne === 2 && resultTwo === 1) || (resultOne === 3 && resultTwo === 2)) {
        winnerMessage.innerHTML = 'победил игрок № 1';
    } else {
        winnerMessage.innerHTML = 'победил игрок № 2';
    }
}

function runGame() {
    let resultOne = getPlayerResult(),
        resultTwo = getPlayerResult();
    determineWinner(resultOne, resultTwo);
    player1.innerHTML = getNameById(resultOne);
    player2.innerHTML = getNameById(resultTwo);
}

btn.addEventListener("click", runGame);