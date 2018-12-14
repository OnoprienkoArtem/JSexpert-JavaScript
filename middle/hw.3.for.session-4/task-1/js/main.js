let first,
    second,
    result = document.getElementById('result'),
    totalCount = document.getElementById('total'),
    totalMessage = document.getElementById('totalMessage'),
    message = '',
    double,
    total = 0,
    largeDiffText = `--> Большой разброс между костями. Разница составляет`,
    largeDiffSecondFirst,
    largeDiffFirstSecond;;


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
        
        message += `Первая кость: ${first}, Вторая кость: ${second} ${double} ${largeDiffFirstSecond} ${largeDiffSecondFirst} <br>`;
    }
    countTotal();
    showTotalMessage();
})();




