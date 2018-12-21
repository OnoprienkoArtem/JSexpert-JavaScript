(function run() {
    'use strict';

    let first,
        second,
        result = document.getElementById('result'),
        totalCount = document.getElementById('total'),
        totalMessage = document.getElementById('totalMessage'),
        message = '',       
        total = 0,
        difText = ' --> Большой разброс между костями. Разница составляет';


    const getRndNumber = () => Math.floor((Math.random() * 6) + 1);    

    const setResult = str => message += str;
    
    function isNumbersEqual() {
        if (first === second) setResult(` --> Выпал дубль. Число ${first}`);         
    }

    function isBigDifference() {    
        if ((first < 3 && second > 4) || (second < 3 && first > 4)) setResult(`${difText} ${Math.abs(first - second)}`); 
    }

    const countTotal = () => total += first + second;

    const showResultMessage = () => result.innerHTML = message;    

    const showTotal = () => totalCount.innerHTML = `всего: ${total}`;        

    function showTotalMessage() {     
        return totalMessage.innerHTML = total >= 100 ? `Победа, вы набрали ${total} очков` : `Вы проиграли, у вас ${total} очков`;;
    }


    for (let index = 0; index <= 15; index++) {
        if (index === 8 || index === 13) continue;        
        
        first = getRndNumber();
        second = getRndNumber();
        
        setResult(`<br> Первая кость: ${first}, Вторая кость: ${second}`)
        isNumbersEqual(); 
        isBigDifference()
        countTotal();        
    }
    showResultMessage();
    showTotal();
    showTotalMessage();
})();