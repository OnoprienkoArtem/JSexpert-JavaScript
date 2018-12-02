let result = document.getElementById('result');

for (let index = 0; index <= 15; index++) {
    let first = Math.floor((Math.random() * 6) + 1);
    let second = Math.floor((Math.random() * 6) + 1);
    let double = '';
    let largeDifference = '';

    if (index === 8 || index === 13) {
        continue;
    }
    if (first === second) {
        double = `--- Выпал дубль. Число ${first}`
    }
    if ((first < 3 && second > 4)){
        largeDifference = `--- Большой разброс между костями. Разница составляет ${second - first}`
    }
    if ((second < 3 && first > 4)) {
        largeDifference = `--- Большой разброс между костями. Разница составляет ${first - second}`
    }


    
    result.innerHTML += `Первая кость: ${first}, Вторая кость: ${second} ${double} ${largeDifference} <br> `;
}