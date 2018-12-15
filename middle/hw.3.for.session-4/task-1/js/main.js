let first,
    second,
    result = document.getElementById('result'),
    totalCount = document.getElementById('total'),
    totalMessage = document.getElementById('totalMessage'),
    message = '',
    double,
    total = 0,
    difText = '--> Большой разброс между костями. Разница составляет',
    largeDiffText = '', 
    largeDiff;


function getRndNumber() {
    return Math.floor((Math.random() * 6) + 1);
}

function setResult() {       
    return message += `Первая кость: ${first}, Вторая кость: ${second} ${double} ${largeDiffText} <br>`;  
}

function isNumbersEqual() {
    return double = first === second ? `--> Выпал дубль. Число ${first}` : '';   
}

function isBigDifference() {    
    if ((first < 3 && second > 4) || (second < 3 && first > 4)) {
        largeDiff = `${first - second}`;
        return largeDiffText = largeDiff < 0 ? `${difText} ${Math.abs(largeDiff)}` : `${difText} ${largeDiff}`;     
    } else {
        return largeDiffText = '';
    }
}

function countTotal() {
    return total += first + second;
}

function showTotal() {    
    return totalCount.innerHTML = `всего: ${total}`;    
}

function showTotalMessage() {     
    return totalMessage.innerHTML = total >= 100 ? `Победа, вы набрали ${total} очков` : `Вы проиграли, у вас ${total} очков`;;
}

function showResultMessage() {
    return result.innerHTML = message;
}

(function run() {
    for (let index = 0; index <= 15; index++) {
        if (index === 8 || index === 13) continue;        
        
        first = getRndNumber();
        second = getRndNumber();
        countTotal();
        isBigDifference()
        isNumbersEqual(); 
        setResult()
    }
    showResultMessage();
    showTotal();
    showTotalMessage();
})();