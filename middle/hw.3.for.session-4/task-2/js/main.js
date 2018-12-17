let btn = document.getElementById("play"),
    player1 = document.getElementById("player1"),
    player2 = document.getElementById("player2"),
    winnerMessage = document.getElementById("result"),
    resultOne, 
    resultTwo;

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function getNameById(result) {   
    if (result === 1) return 'ножницы';
    if (result === 2) return 'камень';
    if (result === 3) return 'бумага';
}

function determineWinner() {
    resultOne = getPlayerResult();
    resultTwo = getPlayerResult();
    if (resultOne === resultTwo) {
        return winnerMessage.innerHTML = 'ничья';
    } else if ((resultOne === 1 && resultTwo === 3) || (resultOne === 2 && resultTwo === 1) || (resultOne === 3 && resultTwo === 2)) {
        return winnerMessage.innerHTML = 'победил игрок № 1';
    } else {
        return winnerMessage.innerHTML = 'победил игрок № 2';
    }
}

function runGame() {
    determineWinner();    
    player1.innerHTML = getNameById(resultOne);
    player2.innerHTML = getNameById(resultTwo);
}

btn.addEventListener("click", runGame);