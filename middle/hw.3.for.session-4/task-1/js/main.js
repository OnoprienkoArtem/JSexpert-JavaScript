let first,
    second,
    result = document.getElementById('result'),
    totalCount = document.getElementById('total'),
    totalMessage = document.getElementById('totalMessage'),
    message = '',
    double,
    total = 0,
    largeDiffText = '--> Большой разброс между костями. Разница составляет',
    largeDiffSecondFirst,
    largeDiffFirstSecond,
    largeDiff;


function getRndNumber() {
    return Math.floor((Math.random() * 6) + 1);
}

function setResult() {    
    return result.innerHTML = message;
}

function isNumbersEqual() {
    double = first === second ? `--> Выпал дубль. Число ${first}` : '';
    setResult();
}

function isBigDifference() {    
    // if ((first < 3 && second > 4) || (second < 3 && first > 4)) {
    //     largeDiff = `${first - second}`;
    //     if (largeDiff < 0) {
    //         largeDiffText = `--> Большой разброс между костями. Разница составляет ${Math.abs(largeDiff)}`;
    //     } else {
    //         largeDiffText = `--> Большой разброс между костями. Разница составляет ${largeDiff}`
    //     }
    // } else {
    //     largeDiff = '';
    // }
    largeDiffSecondFirst = first < 3 && second > 4 ? `${largeDiffText} ${second - first}` : '';
    largeDiffFirstSecond = second < 3 && first > 4 ? `${largeDiffText} ${first - second}` : '';
    setResult();
}

function countTotal() {    
    return totalCount.innerHTML = `всего: ${total}`;    
}

function showTotalMessage() {
     totalMessage.innerHTML = total >= 100 ? `Победа, вы набрали ${total} очков` : `Вы проиграли, у вас ${total} очков`;
    return totalMessage;
}

(function run() {
    for (let index = 0; index <= 15; index++) {
        if (index === 8 || index === 13) {
            continue;
        }        

        first = getRndNumber();
        second = getRndNumber();
        total += first + second;       

        isBigDifference()
        isNumbersEqual();  
        
        message += `Первая кость: ${first}, Вторая кость: ${second} ${double} ${largeDiffSecondFirst} ${largeDiffFirstSecond} <br>`;
    }
    countTotal();
    showTotalMessage();
})();




