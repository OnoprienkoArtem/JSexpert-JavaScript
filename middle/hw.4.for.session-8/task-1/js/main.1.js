var btn = document.getElementById("play");

function transform() {

    // 1. С помощью функции splice необходимо вырезать 6 - й элемент массива.
    // В результате ваш массив должен стать короче на один элемент.

    console.log(data);

    const cutSixElement = array => array.splice(5, 1);

    cutSixElement(data);

    console.log('1. => ', data);



    // 2. Используйте функцию forEach.
    // Внутри цикла создайте новый массив объектов.
    // В процессе создания нового массива объектов, избавьтесь от ключа id.
    // То есть в вашем новом массиве не должно быть id в каждом конкретном объекте.

    const newArr = [];

    const createCopy = (array, newArray) => {
        array.forEach(item => {
            newArray.push({
                name: item.name,
                description: item.description,
                url: item.url,
                params: item.params,
                date: item.date
            })
        })
    };

    createCopy(data, newArr);

    console.log('2. => ', newArr);



    // 3. По новому массиву объектов, полученному с помощью функции forEach пройдитесь методом map()

    // 4. На каждой итерации цикла мы получаем один объект из массива объектов.
    // Берем этот объект и преобразоваем его поля по следующим правилам.

    const newArrayForMap = [];

    const transformTocapitalize = (array, newArray) => {
        array.map(item => {
            // 5. Для поля Name: с помощью функций работы со стрингами делаете первую букву большой, 
            // остальные маленькие(ДЖИП - > Джип)
            let itemName = item.name.toLowerCase();
            itemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);

            // 6. Для поля url: добавить перед ним« http: //»
            let itemUrl = `http://${item.url}`;

            // 7. Для поля Description: с помощью функций работы со стрингами делаете обрезание до 15 символов.
            // После добавляем многоточие(…) Остальное отбрасываете.
            let itemDescription = `${item.description.substr(0, 15)}...`;

            // 8. Для поля date: создать объект даты из заданных миллисекунд и потом отобразить в виде« 2015 / 07 / 02 14: 15»
            const getDateObject = date => {
                let tmp = new Date(date);
                return `${tmp.getFullYear()}/${tmp.getMonth()}/${tmp.getDate()} ${tmp.getHours()}:${tmp.getMinutes()}`;
            };

            // 9*. Более предпочтительно работать с датой с помощью библиотеки moment.js
            const getDateMoment = date => {
                let tmp = moment(date);
                return `${tmp.year()}/${tmp.month()}/${tmp.date()} ${tmp.hour()}:${tmp.minute()}`;
            };

            // 10. Для поля params: из значений ключей сформировать строку типа «true => 80».
            const concatTwoValue = (valueonw, valueTwo) => {
                return `${valueonw} => ${valueTwo}`;
            }

            // 11. Создать новое поле isVisible.Переложить в это поле значение поля params.status.
            newArray.push({
                name: itemName,
                url: itemUrl,
                description: itemDescription,
                dateObject: getDateObject(item.date),
                dateMonent: getDateMoment(item.date),
                params: concatTwoValue(item.params.status, item.params.progress),
                isVisible: item.params.status
            })
        })
    };

    transformTocapitalize(newArr, newArrayForMap);

    console.log('3-> 4-> 5-11 => ', newArrayForMap);



    const newArrayFromFilter = newArrayForMap.filter((item) => {
        return item.isVisible === true;
    });

    const printResultToConsole = input => console.log(input);


    printResultToConsole(newArrayFromFilter);
}



btn.addEventListener("click", transform);