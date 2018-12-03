let result = document.getElementById('result'),
    totalCount = document.getElementById('total'),
    totalMessage = document.getElementById('totalMessage'),
    total = 0,
    totalMessageText;

for (let index = 0; index <= 15; index++) {    
    let first = Math.floor((Math.random() * 6) + 1),
        second = Math.floor((Math.random() * 6) + 1),
        double,
        largeDiffText = `--> Большой разброс между костями. Разница составляет`,
        largeDiffSecondFirst,
        largeDiffFirstSecond;

    if (index === 8 || index === 13) {
        continue;
    }
    // проверяем на дубль
    double = first === second ? `--> Выпал дубль. Число ${first}` : '';

    // проверяем на разброс
    largeDiffSecondFirst = first < 3 && second > 4 ? `${largeDiffText} ${second - first}` : '';
    largeDiffFirstSecond = second < 3 && first > 4 ? `${largeDiffText} ${first - second}` : '';

    // считаем сумму 
    total += first + second;
    
    // выводим информацию о выпавших костях
    result.innerHTML += `Первая кость: ${first}, Вторая кость: ${second} ${double} ${largeDiffFirstSecond} ${largeDiffSecondFirst} <br>`;

    //  выводи сумму всех выпавших костей за все попытки
    totalCount.innerHTML = `всего: ${total}`;
}

// проверяем больше ли 100 сумма выпавших костей за все попытки 
totalMessageText = total >= 100 ? `Победа, вы набрали ${total} очков` : `Вы проиграли, у вас ${total} очков`;

// выводим сообщение, результат проверки
totalMessage.innerHTML = `${totalMessageText}`;