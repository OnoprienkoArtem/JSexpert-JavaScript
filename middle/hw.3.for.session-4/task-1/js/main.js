// let result = document.getElementById('result'),
//     totalCount = document.getElementById('total'),
//     totalMessage = document.getElementById('totalMessage'),
//     total = 0,
//     message = '';

// for (let index = 0; index <= 15; index++) {    
//     let first = Math.floor((Math.random() * 6) + 1),
//         second = Math.floor((Math.random() * 6) + 1),
//         double,
//         largeDiffText = `--> Большой разброс между костями. Разница составляет`,
//         largeDiffSecondFirst,
//         largeDiffFirstSecond;

//     if (index === 8 || index === 13) {
//         continue;
//     }

    // проверяем на дубль
//     double = first === second ? `--> Выпал дубль. Число ${first}` : '';

    // проверяем на разброс
//     largeDiffSecondFirst = first < 3 && second > 4 ? `${largeDiffText} ${second - first}` : '';
//     largeDiffFirstSecond = second < 3 && first > 4 ? `${largeDiffText} ${first - second}` : '';

    // считаем сумму 
//     total += first + second;
    
    // создаем сообщение
//     message += `Первая кость: ${first}, Вторая кость: ${second} ${double} ${largeDiffFirstSecond} ${largeDiffSecondFirst} <br>`;
// }

// выводим информацию о выпавших костях
// result.innerHTML = message;

//  выводим сумму всех выпавших костей за все попытки
// totalCount.innerHTML = `всего: ${total}`;

//  выводим сообщение, результат проверки
// totalMessage.innerHTML = total >= 100 ? `Победа, вы набрали ${total} очков` : `Вы проиграли, у вас ${total} очков`;



// -------------------
let first,
    second,
    result = document.getElementById('result'),
    message = '',
    double,
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

(function run() {
    for (let index = 0; index <= 15; index++) {
        if (index === 8 || index === 13) {
            continue;
        }
        // console.log(index);

        first = getRndNumber();
        second = getRndNumber();

        console.log('first', first);
        console.log('second', second);

        isBigDifference()
        isNumbersEqual();
        
        message += `Первая кость: ${first}, Вторая кость: ${second} ${double} ${largeDiffFirstSecond} ${largeDiffSecondFirst} <br>`;

        
    }
})();




