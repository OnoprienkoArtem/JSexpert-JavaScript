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
    first === second ? double = `--> Выпал дубль. Число ${first}` : double = '';

    // проверяем на разброс
    first < 3 && second > 4 ? largeDiffSecondFirst = `${largeDiffText} ${second - first}` : largeDiffSecondFirst = '';
    second < 3 && first > 4 ? largeDiffFirstSecond = `${largeDiffText} ${first - second}` : largeDiffFirstSecond = '';

    // считаем сумму 
    total += first + second;
    
    // выводим информацию о выпавших костях
    result.innerHTML += `Первая кость: ${first}, Вторая кость: ${second} ${double} ${largeDiffFirstSecond} ${largeDiffSecondFirst} <br>`;

    //  выводи сумму всех выпавших костей за все попытки
    totalCount.innerHTML = `всего: ${total}`;
}

// проверяем больше ли 100 сумма выпавших костей за все попытки 
total > 100 ? totalMessageText = `Победа, вы набрали ${total} очков` : totalMessageText = `Вы проиграли, у вас ${total} очков`;

// выводим сообщение, результат проверки
totalMessage.innerHTML = `${totalMessageText}`;